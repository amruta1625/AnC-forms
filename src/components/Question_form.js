import React,{useState,useEffect} from 'react'
import CropOriginalIcon from '@mui/icons-material/CropOriginal'
import Select from '@mui/material/Select'
import Switch from'@mui/material/Switch'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import ShortTextIcon from'@mui/icons-material/ShortText'
import SubjectIcon from'@mui/icons-material/Subject'
import MoreVertIcon from'@mui/icons-material/MoreVert'
import TextFieldsIcon from'@mui/icons-material/TextFields'
import FormControlLabel from'@mui/material/FormControlLabel'
import Button from'@mui/material/Button'
import Radio from '@mui/material/Radio'
import CloseIcon from '@mui/icons-material/Close'
import {FcRightUp} from 'react-icons/fc'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Accordion from '@mui/material/Accordion'
import {BsFileText, BsSortDownAlt} from 'react-icons/bs'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import FilterNoneIcon from '@mui/icons-material/FilterNone'
import { IconButton, Typography } from '@mui/material'
import {BsTrash} from 'react-icons/bs'
import "./Question_form.css"
import MenuItem from '@mui/material/MenuItem'
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd";

  function Question_form() {
  const [questions,setQuestions]=useState(
    [{questionText:"Untitled Question",
     questionType:"radio",
      options: [
         {optionText:"Option 1"},
         {optionText:"Option 2"},
         {optionText:"Option 3"},
         {optionText:"Option 4"},
      ],
      open:true,
      required:false}]
  )
  function onDragEnd(result){
    if(!result.destination){
      return;
    }
    var itemgg=[...questions];
    const itemF=reorder(
      itemgg,
      result.source.index,
      result.destination.index
    );
  
    setQuestions(itemF);
  }
    const reorder=(list,startIndex,endIndex)=>{
      const result=Array.from(list);
      const [removed] =result.splice(startIndex,1);
      result.splice(endIndex,0,removed);
      return result;
    }
  
  function changeQuestion(text,i){
    var newQuestion=[...questions];
    newQuestion[i].questionText=text;
    setQuestions(newQuestion);
    console.log(newQuestion)
  }
  function changeOptionValue(text,i,j){
    var optionQuestion=[...questions];
    optionQuestion[i].options[j].optionText=text;
    setQuestions(optionQuestion);
    console.log(optionQuestion)
  }
  function addQuestionType(i,type){
    let qs=[...questions];
    console.log(type)
    qs[i].questionType=type;
    setQuestions(qs);
  }
  function addOption(i){
    var OptionsOfQuestion=[...questions];
    if(OptionsOfQuestion[i].options.length<10){
      OptionsOfQuestion[i].options.push({optionText:"Option"+(OptionsOfQuestion[i].options.length +1)});
    } else{
      console.log("Max  10 options");
    }
    setQuestions(OptionsOfQuestion)
  }
  function copyQuestion(i){
    let qs =[...questions];
    var newQuestion={...qs[i]};

    setQuestions([...qs,newQuestion]);
  }
  function deleteQuestion(i){
    let qs =[...questions]
    if(questions.length>1){
      qs.splice(i,1);
    }

    setQuestions(qs)
  }
  function requiredQuestion(i){
    var reqQuestion=[...questions];
      reqQuestion[i].required= !reqQuestion[i].required;
    
    console.log(reqQuestion[i].required=" "+i);
    setQuestions(reqQuestion);
  }
  function removeOption(i,j){
    var RemoveOptionQuestion=[...questions];
    if(RemoveOptionQuestion[i].options.length>1){
      RemoveOptionQuestion[i].options.splice(j,1);
      setQuestions(RemoveOptionQuestion)
      console.log(i+"_"+j);
    }
  }
  function addMoreQuestionField(){
    setQuestions([...questions,
    {questionText:"Question",questionType:"radio",options:[{optionText: "Option 1"}],open:true,required:false}]
    );
  }
  function questionsUI(){
    return questions.map((ques,i)=>(
      <Accordion expanded={ques.open} className={ques.open ? 'add_border' : ""} key={i}>
        <AccordionSummary aria-controls="panelia-content" id="panelia-header" elevation={1} style={{width:'100%'}}>
          { !ques.open ?(
            <div className='saved_questions'>

              <Typography style={{fontSize:"15px",fontWeight:"400",letterSpacing:".1px",lineHeight:"24px",paddingBottom:"8px"}}>
                {i+1}. {ques.questionText}
              </Typography>


              {ques.options.map((op,j)=>(


                <div key={j}>
                  <div style={{display:"flex",}}>
                    <FormControlLabel style={{marginLeft:"5px",marginBottom:"5px"}} disabled control={<input type={ques.questionType}
                    color="primary" style={{marginRight: '3px'}} required={ques.required}/>} label={
                      <Typography style={{fontFamily:"Roboto,Arial,sans-serif",
                        fontSize:'13px',
                        fontWeight:'400',
                        letterSpacing:'.2px',
                        lineHeight:'20px',
                        color:'#202124'}}>
                          {op.optionText}
                        </Typography>
                        }/>
                  </div>
                </div>
              ))}
            </div>
          ) : null }
        </AccordionSummary>
        <div className="question_boxes">
          <AccordionDetails className="add_question">
            <div className="add_question_top">
              <input type="text" className="question" placeholder="Question" value={ques.questionText} onChange={(e)=>{changeQuestion(e.target.value,i)}}></input>
              {/* <CropOriginalIcon style={{color:"#5f6368"}} /> */}
              <Select className="select" style={{color:"#5f6368",fontSize:"13px"}}>
                <MenuItem id="text" value="Text" onClick={()=>{addQuestionType(i,"text")}}><SubjectIcon style={{marginRight:"10px"}} />Short answer</MenuItem>
                <MenuItem id="text" value="Text" onClick={()=>{addQuestionType(i,"text")}}><SubjectIcon style={{marginRight:"10px"}} />Long answer</MenuItem>
                <MenuItem id="checkbox" value="Checkbox" onClick={()=>{addQuestionType(i,"checkbox")}}><CheckBoxIcon style={{marginRight:"10px", color:"#70757a"}} checked />checkbox</MenuItem>
                <MenuItem id="radio" value="Radio" onClick={()=>{addQuestionType(i,"radio")}}><Radio style={{marginRight:"10px", color:"#70757a"}} checked />Multiple choice </MenuItem>
              </Select>
            </div>
            {ques.options.map((op,j)=>(
              <div className="add_question_body" key={j}>
                {
                  (ques.questionText!="text")?
                  <input type={ques.questionType} style={{marginRight:"10px"}}/>:
                  <ShortTextIcon style={{marginRight:"10px"}}/>
                }
                <div>
                  <input type="text" className="text_input" placeholder="options" value={ques.options[j].optionText} onChange={(e)=>{changeOptionValue(e.target.value,i,j)}}></input>
                </div>

                {/* <CropOriginalIcon style={{color:"#5f6368"}}/> */}
                <IconButton aria-label='delete'>
                  <CloseIcon onClick={()=>{removeOption(i,j)}}/>
                </IconButton>
              </div>
            ))}

              {ques.options.length<10?(
                <div className='add_question_body'>
                  <FormControlLabel disabled control={
                    (ques.questionText!="text")?
                    <input type={ques.questionType} color='primary' inputProps={{'aria-label':'secondary checkbox'}}
                        style={{marginleft:"10px", marginRight:"10px"}} disabled/>:
                    <ShortTextIcon style={{marginRight:"10px"}}/>

                  } label={
                    <div>
                      <input type="text" className="text_input" style={{fontSize:"13px",width:"60px"}} placeholder='Add other'></input>
                      <Button size="small" onClick={()=>{addOption(i)}} style={{textTransform:"none", color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>Add Option</Button>
                    </div>
                  }/>

                </div>
              ):""}
            <div className="add_footer">
              <div className="add_question_bottom_left">
                <Button size="small" style={{textTransform:'none', color:'#4285f4' ,fontSize:"13px",fontWeight:"600"}}>
                  <FcRightUp style={{border:"2px solid #4285f4", padding:"2px",marginRight:"8px"}}/> Answer key
                </Button>
                <div className="add_question_bottom">
                  <IconButton aria-label="Copy" onClick={()=>{copyQuestion(i)}}>
                    <FilterNoneIcon/>
                  </IconButton>
                  <IconButton aria-label="delete" onClick={()=>{deleteQuestion(i)}}>
                    <BsTrash/>
                  </IconButton>
                     <span style={{color:"#5f6368",fontSize:"13px"}}>Required</span>
                     <Switch name='checked' color="primary" onClick={()=>{requiredQuestion(i)}} checked={ques.required}/>
                  <IconButton>
                    <MoreVertIcon/>
                  </IconButton>
                </div>
              </div>
            </div>
          </AccordionDetails>
          <div className="question_edit">
            <AddCircleOutlineIcon onClick={addMoreQuestionField} className="edit" />
            <TextFieldsIcon className="edit"/>
            <CropOriginalIcon className="edit"/>
            <OndemandVideoIcon className="edit"/>
          </div>
        </div>
      </Accordion>
    ));
  }
  // return questions.map((ques,i)=>(
  //   <Draggable key={i} draggableId={i+'id'} index={i}>
  //     {(provided,snapshot)=>(
  //       <div ref={provided.innerRef}
  //       {...provided.draggableProps}
  //       {...provided.dragHandleProps}>
  //         <div>
  //           <div style={{marginBottom:"0px"}}>
  //             <div style={{width:"100%", marginBottom:"0px"}}>
  //               <DragIndicatorIcon style={{transform:"rotate(-90deg)",color:"#DAE0E2",
  //                    position:"relative",left:"300px"}} fontSize='small'/>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //     )}
  //   </Draggable>
  // ))
  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
            <div className="question_title_section">
                <div className="question_form_top">
                    <input type="text" className='question_form_top_name' style={{color:"black"}} placeholder="Untitled document"  ></input>
                    <input type="text" className='question_form_top_desc' placeholder="Form Description"  ></input>
                </div>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided,snapshot)=>(
                  <div {...provided.droppableProps}
                  ref={provided.droppableprops}
                  >
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            {questionsUI()}
        </div>
      </div>
    </div>
  )
}

export default Question_form
