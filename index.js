function superbowlWin (arr){
    const record = arr.find(date => date.result === "W")
    return record ? record.year : undefined;
}
