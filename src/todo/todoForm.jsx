import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandle = this.keyHandle.bind(this)
    }
    keyHandle(e){
        const { clear, add, search, description } = this.props
        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        }else if(e.key === 'Escape'){
            clear()
        }
    }
    componentWillMount(){
        this.props.search()
    }
    render(){
        const { clear, add, search, description } = this.props
        return(
            <div role='form' className='todoForm'>
                <Grid cols="12 9 10">            
                    <input id='description' className='form-control' 
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandle}
                        value={this.props.description}/>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style="primary" icon="plus" onClick={() => add(description)}/>
                    <IconButton style='info' icon='search' onClick={() => search()}/>
                    <IconButton style='default' icon='close' onClick={() => clear()}/>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({
        changeDescription, 
        search,
        add,
        clear
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)