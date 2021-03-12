import { ProgramServiceService } from './../../services/program-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  programs;
  programsFilter
  progName:any=null;
  city:any=null
  programFilter
  City="Choose one city or more"
  type="Choose one field"
  school="Choose one school"
  language
  constructor(private ProgramServiceService:ProgramServiceService) { }

  ngOnInit() {
    this.programs=this.ProgramServiceService.getPrograms();
    this.programsFilter=this.ProgramServiceService.getPrograms();
    console.log(this.programs)
  }

  search(){
    console.log(this.progName)
    console.log(this.city)
 if(this.progName!==null&&this.city===""){
   console.log(1)
    this.programs = this.ProgramServiceService.getPrograms().filter(prog=>{
      return   prog.Name.toLocaleLowerCase().match(this.progName.toLocaleLowerCase()) 
      })
  } else if(this.city!==null&&this.progName!==null){   console.log(2)

    this.programs = this.ProgramServiceService.getPrograms().filter(prog=>{
  return   prog.Name.toLocaleLowerCase().match(this.progName.toLocaleLowerCase()) 
  &&prog.city.toLocaleLowerCase()==this.city.toLocaleLowerCase()
  })
}else if(this.city!==null&&this.progName==null){   console.log(3)

  this.programs = this.ProgramServiceService.getPrograms().filter(prog=>{
return   prog.city.toLocaleLowerCase()==this.city.toLocaleLowerCase()
})
}
  else{    console.log(4)
     this.programs = this.ProgramServiceService.getPrograms().filter(prog=>{
    return   prog.Name.toLocaleLowerCase().match(this.progName.toLocaleLowerCase()) 
    })
  }
}

filterByCity(){
  console.log(this.City)
  // this.city=this.City
  this.progName===""
    this.programs = this.ProgramServiceService.getPrograms().filter(prog=>{
      console.log(this.City)
      return   prog.city==this.City;
  
      })
 

}


filterByType(){
  console.log(this.City)
    this.programs = this.ProgramServiceService.getPrograms().filter(prog=>{
      console.log(this.City)
      return   prog.type==this.type;
  
      })
 

}


filterBySchool(){
  console.log(this.City)
    this.programs = this.ProgramServiceService.getPrograms().filter(prog=>{
      console.log(this.City)
      return   prog.school==this.school;
  
      })
 

}


filterByProgram(){
  console.log(this.programFilter)
  this.programs = this.ProgramServiceService.getPrograms().filter(prog=>{
   return   prog.level==this.programFilter
   })
}

filterByLanguage(){
  console.log(this.language)
if(this.language=="all"){
  this.programs = this.ProgramServiceService.getPrograms()
}else{
  this.programs = this.ProgramServiceService.getPrograms().filter(prog=>{
    return   prog.Language==this.language
    })
}
 
 } 


}


