import React,{Component} from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';

class ComingSoon extends Component{

	constructor(props){
		super(props);
		this.state = {
			movies:[],
			name:''
		}
	}

	componentWillMount(){
		axios.get('../app/json/comingsoon.json')
		.then(response=>{
			this.setState({
				movies:response.data.subjects
			});
		})
		.catch(error=>{

		})
	}

	render(){
		return (
		<div>
			<h1>这时即将上映的页面</h1>
			{
					this.state.movies.map((item,key)=>{
						return (
								<Col span={6} key={key}>
									<img style={{height:'150px',width:'100px'}} src={item.images.small} />
									<h1>{item.title}</h1>
								</Col>
						)
					})
				}
		</div>
		
		)
	}
}

export default ComingSoon;