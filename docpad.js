module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Email Talks",
      description: "Conference description",
      date: "Novembro 18",
      // If your event is free, just comment this line

      price: "R$ 50",
      venue: "Florianópolis/SC",
      address: "SEDE ACIF - Rua: Emílio Blum, 121. Centro Florianópolis - SC - ",
      city: "Florianópolis",
      state: "Santa Catarina"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se agora!",
        link: "http://www.eventick.com.br/email-talks"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/braziljs/conf-boilerplate"
    },


    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Local",
      speakers: "Palestrantes",
      schedule: "Programação",
      sponsors: "Patrocínio",
      partners: "Apoio",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Credenciamento",
        time: "19h00"
      },
      {
        name: "Cristiano Chaussard ",
        photo: "themes/yellow-swan/img/cristiano.jpg",
        bio: "Cristiano é especialista em e-commerce há 12 anos, diretor da Flexy Negócios Digitais, de Florianópolis, diretor-fundador do Grupo Digital de Santa Catarina (GDSC) e professor de e-commerce na Estácio de Sá.",
        company: "Flexy Negócios Digitais",
        link: {
          href: "https://twitter.com/cristianoflexy",
          text: "@cristianoflexy"
        },
        presentation: {
          title: "Recuperando Clientes Inativos usando Email e E-commerce B2B",
          description: "A palestra mostra técnicas para recuperar clientes uma carteira de clientes inativos na indústria para tornar com retorno de investimento em curto prazo e alta rentabilidade. Tudo isto utilizando comunicação por e-mail tele-marketing e e-commerce B2B.",
          time: "19h30"
        }
      },
      {
        name: "Rodrigo Gonçalves",
        photo: "themes/yellow-swan/img/Jimmy7.jpg",
        bio: "Rodrigo é CEO da Jimmy, empresa de tecnologia e inovação voltada para visibilidade de marcas na internet e Co-Fundador do OlhóCON, o maior Evento de Marketing Digital e Empreendedorismo do Sul do Brasil.",
        company: "Jimmy",
        link: {
          href: "https://twitter.com/rdeag",
          text: "@rdeag"
        },
        presentation: {
          title: "A Internet como Canal de Relacionamento",
          description: "A internet já é mais que um canal de comunicação, é um ambiente de oportunidades para o relacionamento com seu público alvo. Nesta palestra Rodrigo apresentará as principais estratégias para transformar os seus canais digitais em um meio poderoso para o relacionamento próximo com seus clientes.",
          time: "20h00"
        }
      },
      {
        name: "Parada pro cafezinho",
        time: "20h30"
      },
      {
        name: "Stamatios Stamou Jr",
        photo: "themes/yellow-swan/img/ssjunior.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "eCentry",
        link: {
          href: "https://twitter.com/ssjunior",
          text: "@ssjunior"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "21h00"
        }
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Encerramento",
        time: "22h00"
      }
      
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "eCentry",
        logo: "themes/yellow-swan/img/ecentry.png",
        url: "http://ecentry.com"
      },
      {
        name: "Emailmanager",
        logo: "themes/yellow-swan/img/emm.png",
        url: "http://www.emailmanager.com"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "ABComm",
        logo: "themes/yellow-swan/img/abcomm.png",
        url: "http://www.abcomm.org"
      },
      {
        name: "Jimmy",
        logo: "themes/yellow-swan/img/jimmy-logo.png",
        url: "http://www.jimmyffw.com/"
      },
      {
        name: "Flexy",
        logo: "themes/yellow-swan/img/flexy.png",
        url: "http://www.flexy.com.br"
      }
      
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};