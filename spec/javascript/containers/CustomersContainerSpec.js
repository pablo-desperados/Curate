import CustomersContainer from '../../../app/javascript/react/containers/CustomersContainer';

describe("CustomersContainer", ()=>{
  let wrapper;
  let customer1= {
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
  let customer2= {
    id: 2,
    first_name: "Daniel",
    last_name: "Mujica",
    email: "test2@gmail.com",
    phone_number: "888-888-888",
    lifecycle_status: 'Not contacted',
    title: 'VP Marketing',
    company_name: 'Hills Equity',
    location: 'Boston, MA'
  }

  beforeEach(()=>{
    wrapper = shallow(
      <CustomersContainer
       match={{params: {id: 1}, isExact: true, path: "", url: ""}}
      />)

  });

  it("Should have an initial empty state", ()=>{
    expect(wrapper.state()).toEqual({
      customerList: []
    })
  })

  it("Component should render a list of customers",()=>{
    wrapper.setState({
      customerList: [customer1, customer2]
    })
    expect(wrapper.find('CustomerCardContainer')).toBePresent()
    expect(wrapper.find('CustomerCardContainer').nodes[1].props["first_name"]).toEqual("Pablo")
    expect(wrapper.find('CustomerCardContainer').nodes.length).toEqual(2)
  })

})
