import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import {Button, Title } from 'react-native-paper';
import { connect } from 'react-redux';
import {updateCurrentState } from './ReduxStore/actions'
const Test = (props)=>{
  
    let t1 = props.currentstate
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           
            <Title style={{textAlign:'center'}}>Hello guys! Test Redux and React-native-paper</Title>
           <Button
            onPress={()=>{
                props.updateCurrentState(!props.currentstate)
                console.log("Props are ",props.currentstate,t1)
            }}
           >
               <Text>Change Redux Val</Text> 
           </Button>
           <Text>*Result logged to console </Text>
        </View>
    )
}

const mapStateToProps = (state ,props) => {
    return {
        currentstate: state.currentstate
    }
  }
  
  const mapDispatchToProps =
  { 
    updateCurrentState 

  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Test)