let a=[
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [3, 10, 26, 7]
];
for( let i in a){
    document.write('"<strong>row</strong> ' + i+'<br>');
    for(j in a[i]){
        document.write(' '+ a[i][j] + '<br>')
    }
}