var numJewelsInStones = function(J, S) {
    var jewels = {};
    var total = 0;
    for (var i = 0; i < J.length; i ++) {
        jewels[J[i]] = true;
    }
    for (var j = 0; j < S.length; j ++) {
        if (jewels[S[j]]) {
            total ++;
        }
    }
    return total;
};

numJewelsInStones('aA', 'aAAbbbb');