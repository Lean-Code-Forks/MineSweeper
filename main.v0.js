function MineSweeper(){ 
// grid value [show, encoding, flag];
  const {empty, show, flag, mine} = [0,0,0,-1]; let {total,mines} = [0,20]; const diffs = [-1,0,1];
 
  this.start = (difficulty,rows,cols)=>{ this._2Dgrid(), this.layMines(), this.layHints(); };
 
  this._2Dgrid = Array(rows).fill(Array(cols).fill([0,empty,flag]));
 
  this.iter = (cb) => this._2Dgrid.slice().map((row, rowI)=>{ return row.map((col,colI)=>{ return cb(row,rowI,col,colI) });});
 
  this.layMines = () => while (mines) { 
         this._2Dgrid = this.iter((r,rI,c,cI)=>{ if (mines && Math.random() > 0.8) --mines, return [0, mine, 0] )); }); 
  }
  this.layHints = () => this._2Dgrid = this.iter((r,rI,c,cI)=>{
    if (col[1] !== mine) {
          diffs.forEach((rD)=> diffs.forEach(cD=>(_2Dgrid[rI+rD][cI+cD][1] === mine) && total++ ))
          col[1] = total; total = 0;
    } 
  ));
  this.flag = (row,col) => this._2Dgrid[row][col][2] = Number(!this._2Dgrid[row][col][2]);
  this.dig => (row,col) => (this._2Dgrid[row][col][1] !== mine) ? this.uncover():this.kaboom();
 
//   this.uncover => 
  this.kaboom => this._2Dgrid = this.iter((r,rI,c,cI) => (c[1] === mine) && (c[0] = 1)) && c;
 
//   this.ui => // mirror grid
  this.browser => document.getElementById("grid") = (this.iter((r,rI,cI)=> `<div> ${ (row[2] === 1 && "F") || (row[0] === 1 && row[1]) } <div>`) ))
  
}
