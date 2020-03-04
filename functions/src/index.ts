import * as functions from "firebase-functions";
import * as mailgunjs from "mailgun-js";
import * as express from "express";
import * as cors from "cors";
import { check, validationResult, body } from "express-validator";

const config = functions.config();
const mailgun = mailgunjs({ apiKey: config.mailgun.apikey, domain: config.mailgun.domain, host: "api.eu.mailgun.net" });

const app = express();

app.use(cors({ origin: true }));

const sanitizer = () => [
  check("email").isEmail(),
  check("message")
    .not()
    .isEmpty(),
  body("email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: false, gmail_convert_googlemaildotcom: false }),
  body("message")
    .not()
    .isEmpty()
    .trim()
    .escape(),
];

app.post("/", sanitizer(), (req: any, res: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const data = {
    from: req.body.email,
    to: `${config.mailgun.toemail}, website@${config.mailgun.domain}`,
    subject: "Email from company website",
    text: req.body.message,
  };

  return mailgun
    .messages()
    .send(data)
    .then(() => res.sendStatus(200))
    .catch(error => res.status(400).json({ error }));
});

export const sendEmail = functions.https.onRequest(app);
