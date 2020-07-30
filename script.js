function corrigir() {
        var nota = Number()
        var correta1 = document.getElementsByName('rad1')
        var correta2 = document.getElementsByName('rad2')
        var correta3 = document.getElementsByName('rad3')
        var correta4 = document.getElementsByName('rad4')
        if (correta1[1].checked){
            var nota = nota+2.5
}       if (correta2[3].checked){
            var nota = nota+2.5
}       if (correta3[3].checked){
            var nota = nota+2.5             
}       if (correta4[2].checked){
            var nota = nota+2.5
            
} 
        window.alert(`Você tirou ${nota} no teste!`)          
}
