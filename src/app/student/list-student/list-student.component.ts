import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import html2canvas from 'html2canvas';
import  {jsPDF} from 'jspdf';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit{

constructor(private service:StudentService){}
listStudent:any=[]
  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.service.getAllStudents().subscribe(data=>{
      // console.log(data);
      this.listStudent = data;
    });
  }
  deleteStudent(id:any){
    if(confirm('Are you sure??')){
    this.service.deleteStudent(id).subscribe((data:any)=>{
      alert("Record Deleted Successfully.");
      //this.getAllStudents();
      this.ngOnInit();
    });
  };
  
  }

  //pdf generator

generatePdfFile()
{
  let pdf = new jsPDF;
  pdf.text("Hello OSTechHelp",10,10)
  pdf.save();



  
}  
printData()
{  
  let data = document.getElementById("divGeneratePDF");
  this.generatePdfFilefromDiv(data);
}
generatePdfFilefromDiv(htmlcontent:any){

  html2canvas(htmlcontent).then(canvas=>{
    let imgWidth=290;
    let imgHight = (canvas.height * imgWidth /canvas.width)
    const contentDataURL = canvas.toDataURL('image/png')
    // let pdf = new jsPDF('p','mm','a4'); //potrate
    let pdf = new jsPDF('l','mm','a4'); //landscape
    var position = 10;
    pdf.addImage(contentDataURL,'PNG',0,position,imgWidth,imgHight);
    pdf.save("divcontentdata.pdf");
  });

}

}


