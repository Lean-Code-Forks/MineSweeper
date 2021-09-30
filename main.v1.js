function MineSweeper(){ 
  /*
    * in this version i realized practically every method was looping through the entire 2D grid,
    * so I housed all looping methods under 1 function and reference the intended method
    * as callbacks to apply to the iterated element
  */
// grid value [vis, encoding, flag];
  const {empty, vis, flag, mine} = [0,0,0,-1]; let {total,mines} = [0,20]; const diffs = [-1,0,1];
  this.start = (difficulty,rows,cols)=>{ this._2Dgrid(), this.layMines(), this.layHints(); };
  this._2Dgrid = Array(rows).fill(Array(cols).fill([0,empty,flag]));
  this.methods = {
    build: {rows: 20, cols: 20, val: [vis, empty, flag]},
    neighbs:  ()=> diffs.forEach((rD)=> diffs.forEach(cD=>(_2Dgrid[rI+rD][cI+cD][1] === mine) && total++ )) col[1] = total; total = 0;
    hints: {cb: ()=>ctrNmine && neighbs },
    layMine: ()=> if (mines && Math.random() > 0.8) --mines, return [0, mine, 0],
    ctrNmine: {cb: ()=>col[1] !== mine},
    flag:  {access: 2, val: ()=> Number(!this._2Dgrid[row][col][2]);},
    dig:   {cb: (row,col)=>(this._2Dgrid[row][col][1] !== mine) ? this.uncover():this.kaboom();},
    kaboom:{cb:() => (c[1] === mine) && (c[0] = 1)) && c;},
    uncover:{},
  }
  this.method = function(method,row,col,access,val){
    while() {
      for () {
          for () {

          } 
      }
    }
  }
  this.browser => document.getElementById("grid") = (this.iter((r,rI,cI)=> `<div> ${ (row[2] === 1 && "F") || (row[0] === 1 && row[1]) } <div>`) ))
  
}
