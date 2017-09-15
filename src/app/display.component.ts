OnInit {
dpFirstName: string;
dpLastName: string;

constructor(private common: CommonService){}

ngOnInit(){
   this.dpNameCollection = this.common.getNames();
    this.dpLastName = this.common.cmLastName;
}
}