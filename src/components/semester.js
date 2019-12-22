import React, {Component} from 'react';
import './css/semester.css';

class Semester extends Component{
    constructor(props){
        super(props);

        this.state={
            gp:0
        }
    }
    addResultRow(){
        
        var resultRow= document.createElement("div");
        resultRow.classList.add("resultRow");
        
        var resultRows= document.getElementsByClassName("resultRow");
        var len= resultRows.length;
        var courseNumber = len +1;

        var cname= document.createElement("input");
                    cname.setAttribute("type", "text");
                    cname.setAttribute("placeholder", "Course "+ courseNumber);
                    cname.classList.add("course-name");

        var cunits= document.createElement("input");
                    cunits.setAttribute("type", "number");
                    cunits.setAttribute("placeholder", "CU");
                    cunits.classList.add("cu");

        var grades= document.createElement("select");
                    grades.classList.add("grade")
            var gradeA = document.createElement("option");
            var A= document.createTextNode("A");
            gradeA.appendChild(A);
            gradeA.setAttribute("value", 5);

            var gradeB = document.createElement("option");
            var B= document.createTextNode("B");
            gradeB.appendChild(B);
            gradeB.setAttribute("value", 4);

            var gradeC = document.createElement("option");
            var C= document.createTextNode("C");
            gradeC.appendChild(C);
            gradeC.setAttribute("value", 3);

            var gradeD = document.createElement("option");
            var D= document.createTextNode("D");
            gradeD.appendChild(D);
            gradeD.setAttribute("value", 2);

            var gradeE = document.createElement("option");
            var E= document.createTextNode("E");
            gradeE.appendChild(E);
            gradeE.setAttribute("value", 1);

            var gradeF = document.createElement("option");
            var F= document.createTextNode("F");
            gradeF.appendChild(F);
            gradeF.setAttribute("value", 0);
        
        grades.appendChild(gradeA);
        grades.appendChild(gradeB);
        grades.appendChild(gradeC);
        grades.appendChild(gradeD);
        grades.appendChild(gradeE);
        grades.appendChild(gradeF);

        
        resultRow.appendChild(cname);
        resultRow.appendChild(cunits);
        resultRow.appendChild(grades)

        var result= document.getElementsByClassName("result");
        result[0].appendChild(resultRow);
        
    }
    removeResultRow(){
        var resultRow= document.getElementsByClassName("resultRow");
        var len= resultRow.length;
        if(len>1){
            var lastEntry =len-1;
            resultRow[lastEntry].parentNode.removeChild(resultRow[lastEntry]);
        }
    }
    calculate(){
        var resultRow= document.getElementsByClassName("resultRow");
        var courseGrade= document.getElementsByClassName("grade");
        var courseUnit= document.getElementsByClassName("cu");
        var totalGradeByUnit=0;
        var creditUnitSum= 0;

        for(var len= resultRow.length; len>0; len--){

            var row= len-1;
            creditUnitSum+= (courseUnit[row].value*1);
            var gradeByUnit =(courseGrade[row].value*courseUnit[row].value);
            totalGradeByUnit+= gradeByUnit;            
        }
        var totalCreditUnit =document.getElementsByClassName("tcu");

        if ((totalCreditUnit[0].value)==creditUnitSum){
            var result = totalGradeByUnit/totalCreditUnit[0].value;
            if(Number.isNaN(result)){
                alert("You should consider filling in the blanks");
            }
            else{
                this.setState({
                    gp: result
                })
            }
        }
        else{
            this.setState({
                gp: "Input Error"
            })
        }
    }
    gp(){
        alert("Calculated GP is " + this.state.gp);
    }

    render(){
        return(
            <div className="complete-content">
                <div>
                    <div className="result">
                        <div className="tcu-container">
                            <input type="number" className="tcu" placeholder="TCU"/>
                        </div>
                        <div className="resultRow">
                            <input type="text" className="course-name" placeholder="Course 1"/>
                            <input type="number" className="cu" placeholder="CU"/>
                            <select className="grade">
                                <option value={5}>A</option>
                                <option value={4}>B</option>
                                <option value={3}>C</option>
                                <option value={2}>D</option>
                                <option value={1}>E</option>
                                <option value={0}>F</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="add-drop">
                    <button className="add add-drop-btn" onClick={(e)=> this.addResultRow()}>Add</button>
                    <button className="drop add-drop-btn" onClick={(e) => this.removeResultRow()}>Remove</button>
                </div>
                <div className="calculate-container">
                    <button className="calculate" onClick={(e)=> this.calculate()}>Calculate</button>
                </div>
                <div>
                    {this.gp()}
                    <h3 style={{color:"white", textAlign:"center"}}>Calculated GP: {this.state.gp}</h3>
                </div>
            </div>
        );
    }
}

export default Semester;