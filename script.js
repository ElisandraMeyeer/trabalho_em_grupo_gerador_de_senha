var app = new Vue({
    el:'#app',
      data:{
        password:'',
        passwordLength : 16,
        refreshPassword: false,
        tamanhoDaSenha: '',
        optiondata: [
          {
            name: 'Minúsculo',
            status: true,
            chars: 'abcdefghjkmnopqrstuvwxyz'
          },
          {
            name: 'Maiúsculo',
            status: true,
            chars: 'ABCDEFGHJKLMNOPQRSTUVWXYZ'
          },
          {
            name: 'Numeros',
            status: false,
            chars: '0123456789'
          },
          {
            name: 'Caract. Especial',
            status: false,
            chars: '!$%&?+*#-/'
          }
        ]
        
      },
       computed: {
          charset() {
            return [...this.optiondata]
                    .map(element => {
                      if(element.status === true)
                        return element.chars;
                    }).join('');
          },
          generatedPassword() {
            this.refreshPassword;
            return [...window.crypto.getRandomValues(new Uint32Array(this.passwordLength))]
                    .map(value => this.charset[value % this.charset.length])
                    .join('');
          }
        },
      methods:{
           copiar: async function(){
          try {
            await navigator.clipboard.writeText(this.generatedPassword);    
          }catch($e) {
              
          }
        },
        tamanhoDaSenha(){
          if(this.passwordLength === 8){
            return 'Senha nivel Fraca'
          }
        }     
      }
  })
      
   
   