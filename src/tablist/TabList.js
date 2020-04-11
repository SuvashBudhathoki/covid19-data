import React from 'react';
import PropTypes from 'prop-types';
import "./tab-list.styles.css"

import Tab from '../tab/Tab'

class TabList extends React.Component{
    static propTypes ={
        children: PropTypes.instanceOf(Array).isRequired
    }

    constructor(props){
        super(props);
        this.state ={
            activeTab: this.props.children[0].props.label
        }
    }

    onClickTabItem = tab =>{
        this.setState({activeTab:tab})
    }

    render(){
        const {
            onClickTabItem,
            props:{
                children
            },
            state:{
                activeTab
            }
        } = this;
        {console.log('children', children)}
    
    return (
    
        <div className= 'tabs'>
            <ol className='tab-list'>
                {children.map(child=>{
                    const {label}= child.props;
                    return (
                        <Tab
                            activeTab = {activeTab}
                            key ={label}
                            label ={label}
                            onClick = {onClickTabItem}
                            />
                    )
                })}
            </ol>

            <div className='tab-content'>
                {children.map(child => {
                    if(child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>


        </div>
    
    )
    }
}

export default TabList;