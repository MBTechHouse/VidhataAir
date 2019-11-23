/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row
} from "reactstrap";
// core components
import Header from "../components/Headers/EmptyHeader.jsx";
import Messenger from "components/Messenger";
import AnalyticsHeader from '../components/Headers/AnalyticsHeader'

class Bookings extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <div className="bg-gradient-info pb-8 pt-5 pt-md-8" style={{position:'absolute', marginTop:'10%', top:'70%', width:'100%'}}>
        <AnalyticsHeader />
        </div>
        <Container className="mt--7 "  fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Booking Requests</h3>
                </CardHeader>
                <Messenger />
              </Card>
            </div>
          </Row>
          
        </Container>
        
      </>
    );
  }
}

export default Bookings;