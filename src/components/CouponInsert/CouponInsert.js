import React from 'react';
import '../css/Coupon.css';
import $ from 'jquery';


import { CouponFormat ,relpace_ } from '../util/StringFormat';
import {Button ,Input } from 'semantic-ui-react';

import { SERVER_URL } from '../Server';

class CouponInsert extends React.Component {
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
        		phone_num : null,
            contactData: [
                
            ]
        };
    }
    headlePhone  = (event) => {
	    this.setState({
	    	phone_num : event.target.value,
	    });
	};
    
    handlePhoneKeydown = (event,data) => {
		if(event.keyCode === 13) {
			this.insert();
		}
		return false;
	}
    
    focus = (e) =>{
    	if(e === "P"){
    		this.phone.focus();
    	}
    }
    
    
    componentDidMount() {
    	this.phone.focus();
    }
    
    insert = () => {
    	let phone_num = this.state.phone_num;
    
		if(phone_num === "" ||phone_num === null){
			alert("사용가능한 핸드폰 번호를 입력해주세요.");
			this.focus("P");
		}else{
			phone_num =  relpace_(phone_num); 
			this.getC(phone_num).then(this.setC);
		}
    	
    }
    
    getC = (phone_num) => {
    	let data = {
				phone_num: phone_num,
		}
		let params = $.param(data);
		return $.get(`${SERVER_URL}/insert?${params}`); 
	}
	
    setC = (data, textStatus, jqXHR) => {
		console.log(data);
		if(data.gb === "insert" ){
			this.focus("P");
			alert("쿠폰이 생성되었습니다. 쿠폰번호 : " + CouponFormat(data.cp_code) );
		}else{
			alert("이미 등록된 핸드폰 번호입니다. 발급 쿠폰번호" + CouponFormat(data.cp_code));
			return false;
		}

		this.setState({
			contactData : data,
		});
	};

    render(){
        return(
        	<div className="couponWrapper">
	            <div className="couponBody">
	                <h1>쿠폰 생성</h1>
	                <div>
	                <Input  
	                	onKeyDown={this.handlePhoneKeydown} 
            			onChange={this.headlePhone} 
	                	value={this.state.phone_num|| ''}
	                	ref={ref => this.phone = ref}
	                />
	                <br/>
	                </div>
                	<Button
                		color="teal"
                		content="생성"
                		onClick={this.insert}
                	/> 
               </div>
            </div>
        );
    }
}

export default CouponInsert;