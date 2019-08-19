import React from 'react'
import UserTile from '../../../app/javascript/react/components/UserTile'


describe("UserTile", ()=>{
  let wrapper;
  let handleClick;

  let information ={
    user_num: 1,
    user:{
      id: 1,
      email: 'A.wight@harvard.edu',
      password: 'SecurePassword123123',
      first_name: 'Andrea',
      last_name: 'Wight',
      profile_photo: {url: undefined}
    }
  }
  beforeEach(()=>{

    wrapper = mount(
      <UserTile
      id="1"
      handleClick={handleClick}
      information = {information}
      />
    )
  })

  it("Should render the number of customer for a certain user", ()=>{
    expect(wrapper.find("UserTile").props().information.user.first_name).toEqual(information.user.first_name)
    expect(wrapper.find("UserTile").props().information.user.id).toEqual(information.user.id)
    expect(wrapper.find("UserTile").props().information.user.last_name).toEqual(information.user.last_name)
    expect(wrapper.find("UserTile").props().information.user.email).toEqual(information.user.email)
    expect(wrapper.find("UserTile").props().information.user_num).toEqual(information.user_num)

  })


})
