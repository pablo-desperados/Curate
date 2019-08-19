import DiaryEntriesComponent from '../../../app/javascript/react/components/DiaryEntriesComponent'
import React from 'react'

describe("DiaryEntriesComponent", ()=>{
  let wrapper;
  let handleClick;

  let customer= {
    id: 1,
    first_name: "Pablo",
    last_name: "Mujica",
    email: "test@gmail.com",
    phone_number: "888-888-888",
    lifecycle_status: 'Champion',
    title: 'Founder',
    company_name: 'Hills Equity',
    location: 'Boston, MA'
  }

  let user={
    id: 1,
    email: 'A.wight@harvard.edu',
    password: 'SecurePassword123123',
    first_name: 'Andrea',
    last_name: 'Wight'
  }

  let userDiary ={
    id: 1,
    customer_id: customer.id,
    title: 'Met Tom for the first time!',
    body: 'We talked about possibly bringing his company as a client. He said he wanted a better deal than other partners',
    favorite: true,
    user_id: user.id
  }
  beforeEach(()=>{
    wrapper = mount(
      <DiaryEntriesComponent
      key={userDiary.id}
      currentUser ={user}
      information = {userDiary}
      owner = {user}
      />
    )
  })

  it("Should return a diary title and body", ()=>{
    expect(wrapper.find('DiaryEntriesComponent').props().information.title).toEqual(userDiary.title)
    expect(wrapper.find('DiaryEntriesComponent').props().information.body).toEqual(userDiary.body)
  })

  it("Should return a user's information", ()=>{
    expect(wrapper.find('DiaryEntriesComponent').props().owner.email).toEqual(user.email)
    expect(wrapper.find('DiaryEntriesComponent').props().owner.first_name).toEqual(user.first_name)
    expect(wrapper.find('DiaryEntriesComponent').props().owner.last_name).toEqual(user.last_name)
  })
})
