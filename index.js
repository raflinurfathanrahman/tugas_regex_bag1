function panggilRegexp(value) {
    let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

    //Tulis Code Jawaban Kamu Di Bawah ini
    var data = str.match(/[c]/ig)
    console.log(data);
    var data1 = str.match(/[k]/ig)
    console.log(data1);
    var data2 = str.match(/[l]/ig)
    console.log(data2);
}

panggilRegexp()