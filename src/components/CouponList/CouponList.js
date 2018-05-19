import React from 'react';
import '../css/Coupon.css';
import $ from 'jquery';
import {Button} from 'semantic-ui-react';

import { CouponFormat , phoneFormat } from '../util/StringFormat';


import { SERVER_URL } from '../Server';


class CouponList extends React.Component {
    render(){

        return (
                <Contacts/>
        );
    }
}



class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                
            ]
        };
    }
    
    componentDidMount() {
	  
    }
    
    search = () => {
    	this.getCouponList().then(this.setCouponList);
    }

    
    getCouponList = () => {
		return $.get(`${SERVER_URL}/list`); 
	}
	
    setCouponList = (data, textStatus, jqXHR) => {
		console.log(data);
		
		this.setState({
			contactData : data,
		});
	};
	
	
    
    render(){
        return(
        	<div className="couponWrapper">
	            <div className="couponBody">
	                <h1>쿠폰리스트</h1>
	                <Button
	                color="teal"
	                content="조회"
	                onClick={this.search}
	            /> 
	                <table className="ui celled table">
	                <thead>
	                  <tr>
		                  <th>순번</th>
		                  <th>핸드폰번호</th>
		                  <th>쿠폰코드</th>
		                  <th>일시</th>
	                  </tr>
	                </thead>
	                <tbody>
	                  {this.state.contactData.map((contact, i) => 
	                  <tr key ={i} value ={contact}>
	                	  <td>{contact.sno}</td>
	                	  <td>{phoneFormat(contact.phone_num)}</td>
	                	  <td>{CouponFormat(contact.cp_code)}</td>
	                	  <td>{contact.in_ymdh}</td>
	                	  
	                	</tr>)
	                    }
	                </tbody>
	              </table>
	                
	            </div>
            </div>
        );
    }
}



export default CouponList;