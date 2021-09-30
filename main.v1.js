function MineSweeper(){ 
  const {empty, vis, flag, mine, diffs} = [0,0,0,-1,[-1,0,1]]; let {total,mines} = [0,20];
  this.start = (difficulty,rows,cols)=>{ `build layMines layHints browser` };
  //this._2Dgrid = Array(rows).fill(Array(cols).fill([0,empty,flag]));
  this.onmethod = function(method,row,col,access,val){
    $ = this.methods
    (iter = mines || 1) && { while(iter)   for ()    for () this.methods.access() }
  }
  this.methods = {
    setTotal: ()=>total = 0;
    setVal: ()=>
    access: ()=>col[p],
    build: {rows: 20, cols: 20, val: [vis, empty, flag]},/
    neighbs:  ()=> diffs.forEach((rD)=> diffs.forEach(cD=>(_2Dgrid[rI+rD][cI+cD][1] === mine) && total++ )) col[1] = total; setTotal();
    hints: ()=>this.ctrNmine() && this.neighbs()
    layMine: ()=> if (mines && Math.random() > 0.8) --mines, return [0, mine, 0],
    ctrNmine: {cb: ()=>col[1] !== mine},
    flag:  {access: 2, val: ()=> Number(!this._2Dgrid[row][col][2]);},
    dig:   {cb: (row,col)=>(this._2Dgrid[row][col][1] !== mine) ? this.uncover():this.kaboom();},
    kaboom:{cb:() => (c[1] === mine) && (c[0] = 1)) && c;},
    uncover:{ cb: ()=> neighbors() &&  },
  }
  this.browser => document.getElementById("grid") = (this.iter((r,rI,cI)=> `<div> ${ (row[2] === 1 && "F") || (row[0] === 1 && row[1]) } <div>`) ))
}
