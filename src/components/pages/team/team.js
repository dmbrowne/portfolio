import React, {useContext, useEffect} from 'react'
import Navbar from '../../common/navbar/navbar'
import Footer from '../../common/footer/footer'
import PeopleContext from '../../../context/people/people-context'
import BlogList from '../../common/blog-list/blog-list'
import TeamMember from '../../common/team-member/team-member'
import EventsSection from './events-section/events-section'

const Team = () => {
  const peopleContext = useContext(PeopleContext)

  useEffect(() => {
    peopleContext.getPeople()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {people, loading} = peopleContext

  const findPerson = (items, id) => {
    return items.find(item => item.id === id)
  }

  const byron = findPerson(people, 1)
  const lilly = findPerson(people, 2)
  const robert = findPerson(people, 3)
  const carmen = findPerson(people, 4)
  const tom = findPerson(people, 5)
  const jack = findPerson(people, 6)

  return (
    <React.Fragment>
      <Navbar light/>
      <div className="container">
        <h1 className="mt-8 mb-7 text-center">We make the world better</h1>

        <img src="/assets/img/team/tim-van-der-kuip-1403210-unsplash.jpg" alt="" className="img-fluid mb-5 mb-md-7" />

          <section className="motivation text-center mb-5 mb-lg-7">

            <div className="container">
              {loading ? 'Loading...' : (
                <div className="row justify-content-between text-white">
                  <div className="col-md-4 pt-md-6">
                    {byron && <TeamMember  person={byron} />}
                    {tom && <TeamMember person={tom} />}
                  </div>
                  <div className="col-md-4">
                    {robert && <TeamMember person={robert} />}
                    {lilly && <TeamMember person={lilly} />}
                  </div>
                  <div className="col-md-4 pt-md-7">
                    {carmen && <TeamMember person={carmen} />}
                    {jack && <TeamMember person={jack} />}
                  </div>
                </div>
              )}
            </div>

          </section>

        <EventsSection />

          <h2 className="h1">We write</h2>
          <div className="mb-5 mb-lg-7 p-0 col-lg-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi esse laudantium, magnam maxime
              necessitatibus odio sequi vel! Corporis doloribus fugit laborum perspiciatis quis reiciendis saepe sit
              sunt unde
              voluptates.</p>
          </div>

          <BlogList postCount={2}/>
      </div>
      <Footer light/>
    </React.Fragment>
)
}

export default Team