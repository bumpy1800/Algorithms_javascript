function solution(book_time) {
    var answer = 0;
    const cvsBookTime = book_time.map(([start, end])=>{
        start = start.split(':');
        end = end.split(':');
        return [parseInt(start[0])*60 + parseInt(start[1]), parseInt(end[0])*60 + parseInt(end[1])];
    })
    cvsBookTime.sort((a,b)=>a[0]-b[0])
    
    const room = []
    cvsBookTime.forEach(([start, end])=>{
        let roomIdx = room.findIndex((endTime)=>endTime<=start)
        
        roomIdx == -1 ? room.push(end+10) : room[roomIdx] = end+10
    })
    return room.length;
}