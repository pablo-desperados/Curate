import CustomerShowTileContainer from '../../../app/javascript/react/containers/CustomerShowTileContainer';

describe("CustomersShowTileContainer", ()=>{
  let wrapper;
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
  let userDiary1 ={
    id: 1,
    customer_id: customer.id,
    title: 'Met Tom for the first time!',
    body: 'We talked about possibly bringing his company as a client. He said he wanted a better deal than other partners',
    favorite: true,
    user_id: user.id
  }
  let userDiary2 ={
    id: 2,
    customer_id: customer.id,
    title: 'Met Haley for the first time!',
    body: 'We talked about possibly bringing his company as an advisor.',
    favorite: true,
    user_id: user.id
  }

  beforeEach(()=>{
    wrapper = shallow(
      <CustomerShowTileContainer
       match={{params: {id: 1}, isExact: true, path: "", url: ""}}
      />)
  });

  it("Should return an empty state on first render", ()=>{
    expect(wrapper.state()).toEqual({
      current_customer: {},
      designated_user: {},
      diary: [],
      selectedDiary: {},
      current_user: {}
    })
    expect(wrapper.find("EmptyDiaryEntriesComponent")).toBePresent()
  })

  it("Shoudl return customer's diary with the user's information", ()=>{
    wrapper.setState({
      diary: [ {diary: userDiary1, user: user}, {diary: userDiary2, user: user}],
      current_customer: customer,
      designated_user: user,
      current_user: user,
      selectedDiary: userDiary1
    })

    expect(wrapper.find("CustomerDashboard")).toBePresent()
    expect(wrapper.find("DiaryFormContainer")).toBePresent()
    expect(wrapper.find("DiaryEntriesComponent")).toBePresent()

    expect(wrapper.find("DiaryEntriesComponent").nodes.length).toEqual(2)
    expect(wrapper.find("DiaryEntriesComponent").nodes[0].props.information["title"]).toEqual('Met Tom for the first time!')

    expect(wrapper.find("CustomerDashboard").nodes[0].props.customerInfo["first_name"]).toEqual(customer["first_name"])
  })


})
