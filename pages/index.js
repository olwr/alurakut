import React from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(propriedades) {
  return (
    <Box as='aside'>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={'https://github.com/${propriedades.githubUser}.png'} style={{ borderRadius: '8px'}}>
        @{propriedades.githubUser}
        </a>
      </p>
      <hr />

        <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {/* {seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`https://github.com/${itemAtual}.png`}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React.useState([
    {
    id: 1616516516515615616516514878,
    title: 'BL2',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FUq-H0MwpHNtKnfLE-IPSBfpx3yegMDseDgTqEHqyBQc.jpg%3Fauto%3Dwebp%26s%3Df27aaeb1472fb79860aba3c642aa7193e9566969&f=1&nofb=1.png',
    url: 'https://borderlands.fandom.com/wiki/Borderlands_2',
  },
  {
    id: 33815476269547656198516156487,
    title: 'Joltz',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAGF-l79Fmt7hadoXOck5sxR3cQkFXtY1ZGrJdbqGzg%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1.png',
    url: 'https://www.twitch.tv/joltzdude139',
  },
  {
    id: 40132375491876846864378954646,
    title: 'TransEmpregos',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsuricrasia.online%2Fdemoscene%2Ftransflag.png&f=1&nofb=1.png',
    url: 'https://www.transempregos.com.br/',
  },
  {
    id: 106627467586768765437846879231,
    title: 'Dance The Night Away',
    image: 'https://cdn.viewing.nyc/assets/media/8b73b14d698cb9a7185ed59f79ccd380/elements/6e738f5da249f43eadbf54dbed5e5625/xl/cf1ecce3-1b7d-4f9d-8f44-ace6561852e9_2x.png',
    url: 'https://open.spotify.com/playlist/3KxLvHdXdhGWUeyOG2qFrW?si=56de044ddec24342',
  },
  {
    id: 842676739841312468676753467867,
    title: 'Albatroz Soup',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fquellemovies.com%2Fwp-content%2Fuploads%2F2019%2F05%2Funnamed.jpg%3Fresize%3D1500%252C720%26ssl%3D1&f=1&nofb=1.png',
    url: 'https://youtu.be/SIdHBJmZWe8?list=PLH2IR43VgYDz5uv3BxSdGUmgfbj7L8yDd',
  },
  {
    id: 842676739842134896463783000576,
    title: 'Lofi Radio',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdesigningsound.org%2Fwp-content%2Fuploads%2F2018%2F10%2FLofi-Cover-3.jpg&f=1&nofb=1.png',
    url: 'https://lofimusic.app/lofigirl',
  },
  {
    id: 46877898503131321657987979,
    title: 'HEYYEYAAEYAAAEYAEYAA',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs--Vs2rv9Gq--%2Fc_fill%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600%2Ftnyayjtvcgmldfokb67b.jpg&f=1&nofb=1.png',
    url: 'https://www.youtube.com/watch?v=ZZ5LpwO-An4&list=PLH2IR43VgYDz5uv3BxSdGUmgfbj7L8yDd&index=136',
  }
  ]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];
  // const comunidades = ['Alurakut'];
  const githubUser= 'olwr';
  const pessoasFavoritas = [
  'Astor63',
  'mopioid',
  'lkrryba',
  'apocalyptech',
  'Ethel',
  'Dave',
  'Koby',
]

const [seguidores, setSeguidores] = React.useState([]);
  // 0 - Pegar o array de dados do github
  React.useEffect(function() {
    fetch('https://api.github.com/users/peas/followers')
    .then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta) {
      setSeguidores(respostaCompleta);
    })
  }, [])

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser= {githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet confiavel={3} legal={3} sexy={3} />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
               e.preventDefault();
               const dadosDoForm = new FormData(e.target);

                // comunidades.push('Alura Stars');
                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                  url: dadosDoForm.get('url'),
                }
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
            }}>

              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                  />
              </div>
              <div>
                <input
                  type="url"
                  placeholder="Coloque a URL do seu website"
                  name="url"
                  aria-label="Coloque a URL do seu website"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>

          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBox title="Seguidores" items={seguidores} />
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
              Comunidades ({comunidades.length})
          </h2>


            <ul>
              {comunidades.slice(0,6).map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`${itemAtual.url}`} key={itemAtual.url}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.slice(0,6).map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
    )
  }
