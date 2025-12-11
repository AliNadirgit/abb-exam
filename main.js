// tabs
        function showTab(t) {
            secK.style.display = t === 'k' ? 'flex' : 'none'
            secD.style.display = t === 'd' ? 'flex' : 'none'
            secA.style.display = t === 'a' ? 'flex' : 'none'
            secM.style.display = t === 'm' ? 'flex' : 'none'
            
            tabK.className = 'px-4 py-2 rounded-full ' + (t==='k'?'bg-black text-white':'border border-slate-200 text-slate-600')
            tabD.className = 'px-4 py-2 rounded-full ' + (t==='d'?'bg-black text-white':'border border-slate-200 text-slate-600')
            tabA.className = 'px-4 py-2 rounded-full ' + (t==='a'?'bg-black text-white':'border border-slate-200 text-slate-600')
            tabM.className = 'px-4 py-2 rounded-full ' + (t==='m'?'bg-black text-white':'border border-slate-200 text-slate-600')
        }

    //DUSTUR
    function ann(p, r, n) {
        if (!p || !n) return 0
        if (r === 0) return p / n
        return p * r / (1 - Math.pow(1 + r, -n))
    }

    // KREDIT
    function calcKredit() {
      var p = Number(kP.value)
      var n = Number(kN.value)
      var f = Number(kF.value)
      var r = f / 100 / 12
      var a = ann(p, r, n)
      kOut.textContent = a.toFixed(2)
    }

    // DEPOZIT
    var dAySay = 3
    var dFreq = 'ay'
    var dFaiz = 8

    document.querySelectorAll('.dBtn').forEach(function (b) {
      b.onclick = function () {
        dAySay = Number(b.dataset.m)
        document.querySelectorAll('.dBtn').forEach(function (x) {
          x.className = 'dBtn px-3 py-2 rounded-full bg-slate-100'
        })
        b.className = 'dBtn px-3 py-2 rounded-full bg-black text-white'
        calcDep()
      }
    })

    function calcDep() {
        var p = Number(dP.value) || 0
        var m = dAySay
        var q = p * dFaiz / 100 * (m / 12)
        var per
        if (dFreq === 'ay') {
          per = m ? q / m : 0
          dLbl.textContent = 'Her ay odenilen faiz'
          dAy.classList.add('bg-white','shadow','text-slate-900')
          dIl.classList.remove('bg-white','shadow','text-slate-900')
        } else {
          var il = m / 12
          per = il ? q / il : 0
          dLbl.textContent = 'Her il odenilen faiz'
          dIl.classList.add('bg-white','shadow','text-slate-900')
          dAy.classList.remove('bg-white','shadow','text-slate-900')
        }
        dOutTotal.textContent = q.toFixed(2)
        dOutPer.textContent = per.toFixed(2)
        dRate.textContent = dFaiz
    }   
    // AVTO
        var aF = 14
        function calcAvto() {
            var price = Number(aP.value) || 0
            var down = Number(aDown.value) || 0
            var m = Number(aN.value) || 0
            var kred = price * (1 - down / 100)
            var r = aF / 100 / 12
            var aylik = ann(kred, r, m)
            var kom = kred * 0.05
            var tot = aylik * m
            aCred.textContent = kred.toFixed(2)
            aOut.textContent  = aylik.toFixed(2)
            aKom.textContent  = kom.toFixed(2)
            aTot.textContent  = tot.toFixed(2)
            aRate.textContent = aF
        }   
        // IPOTEKA
        var mFaiz = 12
        document.querySelectorAll('.mBtn').forEach(function (b) {
          b.onclick = function () {
            mFaiz = Number(b.dataset.r)
            document.querySelectorAll('.mBtn').forEach(function (x) {
              x.className = 'mBtn px-3 py-2 rounded-full bg-slate-100'
            })
            b.className = 'mBtn px-3 py-2 rounded-full bg-black text-white'
            calcMort()
          }
        })  
        function calcMort() {
          var p = Number(mP.value) || 0
          var y = Number(mY.value) || 0
          var n = y * 12
          var r = mFaiz / 100 / 12
          var a = ann(p, r, n)
          mOut.textContent   = a.toFixed(2)
          mPLbl2.textContent = p.toFixed(0)
          mRateLbl.textContent = mFaiz
        }   
        // ilk acilis
        showTab('k')
        calcKredit()
        calcDep()
        calcAvto()
        calcMort()
