/* const tab =[ " /pic2.png" , " /html.png" ,"/js.png"]
<h1>Navbar</h1>
<Navbar className="bg-body-tertiary justify-content-between">
<Form inline>
  <InputGroup>
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <Form.Control
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
</Form>
<Form inline>
  <Row>
    <Col xs="auto">
      <Form.Control
        type="text"
        placeholder="Search"
        className=" mr-sm-2"
      />
    </Col>
    <Col xs="auto">
      <Button type="submit">Submit</Button>
    </Col>
  </Row>
</Form>
</Navbar>
<h1>this our form</h1>
<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
{ tab.map(i =>  <img src={process.env.PUBLIC_URL+ i} alt="ft" /> )}*/