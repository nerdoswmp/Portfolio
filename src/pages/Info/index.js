import React from 'react';
import { FlexHor, Title, FlexVer, FlexHSkills, TextoImg, ImgResponse } from './styled';
import { Container, Container2 } from '../../styles/GlobalStyles';
import retratofalado from '../../images/retratofalado.png'
import wficon from '../../images/wficon.png'

export default function Info(){
    return(
        <>
        <br/><br/>
            <Container>
                <FlexHor>
                    <div>
                        <img src={retratofalado} alt="suspect mugshot"></img>
                    </div>
                    <FlexVer>
                        <div>
                            <Title isWhite>
                                Murilo Henrique Pereira
                                <p>Aprendiz de Desenvolvimento de Sistemas</p>
                            </Title>
                        </div>
                        <div>
                            <h4>
                                Bem vindo ao portfólio mais profissional do mundo
                            </h4>
                            <br></br>
                            <h4>
                                O portfólio será dividido entre conhecimentos e feitos profissionais (programação, projetos) e outros hobbies
                                (modelagem 3D, música, etc)
                            </h4>
                        </div>
                    </FlexVer>
                </FlexHor>
                
            </Container>
            <br/>
            <Container2>
                <FlexVer>
                    <Title isWhite>
                        Conhecimentos
                    </Title>
                    <FlexHSkills>
                        <div>
                            <FlexVer>
                            <Title>
                                Programming
                                Languages
                            </Title>
                            <br></br>
                                <div>
                                    <h1>
                                        Python
                                        <TextoImg src='https://cdn.iconscout.com/icon/free/png-256/python-3521655-2945099.png'/>
                                    </h1>
                                    <h4>
                                        Aprendi python pouco antes de ser contratado, cerca de 1-2 meses pra ser mais exato
                                        nesse meio tempo ele se tornou a linguagem que mais tenho facilidade em utilizar.
                                    </h4>
                                    <FlexHor>
                                        <div>
                                            <a href='https://replit.com/@nerdoswamp/trollerbot-testman#main.py'>Projeto Bot</a>
                                        </div>
                                        <div>
                                            <a href='http://nerdoswampo.pythonanywhere.com/'>Realtime Dashboard</a>
                                        </div>
                                    </FlexHor>
                                </div>
                                <div>
                                    <h1>
                                        CSharp
                                        <TextoImg src='https://raw.githubusercontent.com/learnbr/csharp/master/csharp-logo.png'/>
                                    </h1>
                                    <h4>
                                        O grande, o magnífico, o maraviLHOSO CSharp, como não mencionar ele.
                                        Meu primeiro contato com essa linguagem foi na faculdade durante uma aula
                                        de computação gráfica, onde eu aprendi a usar o Unity antes da síntaxe
                                        base do CSharp. Desde então tenho usado o mesmo para 97% dos projetos do trabalho
                                        e como hobby para projetos próprios. Obrigado trevisharp você me fez gostar do windowsforms!!
                                    </h4>
                                    <FlexHor>
                                        <div>
                                        <a href='https://github.com/nerdoswmp/warCwb'>War Curitiba (WinForms)</a>
                                        </div>
                                        <div>
                                            <a href='https://github.com/nerdoswmp/adv-CSharp'>Projeto Marketplace</a>
                                        </div>
                                    </FlexHor>
                                </div>
                                <div>
                                    <h1>
                                        JavaScript
                                        <TextoImg src='https://cursos.dankicode.com/app/Views/public/mkt/javascriptcompleto/images/js-icon.png'/>
                                    </h1>
                                    <h4>
                                        Toda vez que eu usei o JavaScript foi pra algo básico, "means to an end" de certa forma,
                                        dessa vez entretanto eu estou usando ele pra fazer esse site inteiro.
                                        Se isso é algo bom eu já não sei, mas tá ai.
                                    </h4>
                                    <FlexHor>
                                        <div>
                                            <a href='/'>Portifólio</a>
                                        </div>
                                    </FlexHor>
                                </div>
                                <div>
                                    <h1>
                                        SQL
                                        <TextoImg src='https://icons-for-free.com/download-icon-file+sql+icon-1320183612970878250_512.png'/>
                                    </h1>
                                    <h4>
                                        acabei de lembrar que existe
                                    </h4>
                                    <h4>Não sei usar o MySql, sou SqlServerLover</h4>
                                    <FlexHor>
                                        <div>
                                            <a href='http://nerdoswampo.pythonanywhere.com/'>Realtime Dashboard</a>
                                        </div>
                                        <div>
                                            <a href='https://github.com/nerdoswmp/adv-CSharp'>Projeto Marketplace</a>
                                        </div>
                                    </FlexHor>
                                </div>
                            </FlexVer>
                        </div>
                        <div>
                            <FlexVer>
                            <Title>Frameworks</Title>
                            <br></br>
                            <div>
                                    <h1>
                                        Flask
                                        <TextoImg src='https://cdn.iconscout.com/icon/free/png-256/flask-51-285137.png'/>
                                    </h1>
                                    <h4>
                                        O meu primeiro projeto em python utilizou Flask pra manter ele ativo,
                                        o meu mais recente usou o Flask para realmente fazer o projeto.
                                        Não tenho muito a reclamar, gosto de usar o flask, muito bom, muito legal, recomendo. 8/10
                                    </h4>
                                    <FlexHor>
                                        <div>
                                            <a href='https://replit.com/@nerdoswamp/trollerbot-testman#main.py'>Projeto Bot</a>
                                        </div>
                                        <div>
                                            <a href='https://github.com/nerdoswmp/adv-CSharp'>Projeto Marketplace</a>
                                        </div>
                                    </FlexHor>
                                </div>
                                <div>
                                    <h1>
                                        Angular
                                        <TextoImg src='https://www.pngrepo.com/png/353396/180/angular-icon.png'/>
                                    </h1>
                                    <h4>
                                        Entre tapas e beijos, é odio e desejo, esse amor é doentio. É complicado falar sobre o angular,
                                        tenho uma relação de amor e ódio com ele, mas recentemente estou passando a ter mais amor do que nojo.
                                        Único real problema: utiliza CSS. 7/10
                                    </h4>
                                    <FlexHor>
                                        <div>
                                            <a href='https://github.com/nerdoswmp/adv-CSharp'>Projeto Marketplace</a>
                                        </div>
                                    </FlexHor>
                                </div>
                                <div>
                                    <h1>
                                        WindowsForms
                                        <TextoImg src={wficon}/>
                                    </h1>
                                    <h4>
                                        Esse foi rejeitado por todos. Odiado por todos. Pisoteado por todos.
                                        Mas passei a gostar dele, ele me da uma vibe bem geocities na hora de fazer as telas
                                        e eu gosto disso.
                                        Usei ele pra fazer o War Curitiba. Como front-end é mediocre, como game engine é engraçado. 9/10
                                    </h4>
                                    <FlexHor>
                                        <div>
                                            <a href='https://github.com/nerdoswmp/warCwb'>War Curitiba (WinForms)</a>
                                        </div>
                                    </FlexHor>
                                </div>
                                
                            </FlexVer>
                        </div>
                    </FlexHSkills>
                    <div>
                        <h2>
                            I also speak english but I didn't make a relevant
                            category for this information so I'm just gonna leave it
                            here at the bottom of the section!!!
                        </h2>
                    </div>
                </FlexVer>
            </Container2>
            <Container2>
                <FlexVer>
                    <Title>
                        Hobbies
                    </Title>
                    <br></br>
                    <FlexHSkills>
                        <div>
                            <h1>
                                Baixo
                            </h1>
                            <h4>
                                Eu toco baixo!!!!
                            </h4>
                            <h4>
                                Normalmente eu só pratico tocar músicas que eu curto,
                                mas recentemente tenho tentado fazer minhas próprias músicas com
                                alguns amigos, se o projeto banda for a algum lugar irei atualizar
                                esta página.
                            </h4>
                        </div>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/hxI5_MBNRgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </FlexHSkills>
                    <FlexHSkills>
                        <div>
                            <h1>
                                Edição de vídeo
                            </h1>
                            <h4>
                                Eu edito vídeos!!!!!!!
                            </h4>
                            <h4>
                                A maioria deles é horrível, um crime atrás do outro,
                                mas não deixa de ser um hobby.
                            </h4>
                            <h4>
                                Segue ao lado um deles, não é o melhor mas é um dos
                                mais simples.
                            </h4>
                        </div>
                        <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/U242xEzTNlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </FlexHSkills>
                    <FlexHSkills>
                        <div>
                            <h1>
                                Edição de imagens
                            </h1>
                            <h4>
                                Pasme
                            </h4>
                            <h4>
                                Segue ao lado o Gabriel "Gigachad" Pucci Bizio, um dos 
                                nossos colégas de serviço e mascote não oficial dos italianos
                                em Curitiba
                            </h4>
                        </div>
                        <div>
                            <ImgResponse src='https://cdn.discordapp.com/attachments/915347062260899870/916323879385989161/Bizio_GigaChad.png'></ImgResponse>
                        </div>
                    </FlexHSkills>
                    <FlexHSkills>
                        <div>
                            <h1>
                                Modelagem 3D
                            </h1>
                            <h4>
                                Eu sei fazer modelagem 3D!!!!!!!!!!!!!!!!!!!!!
                            </h4>
                            <h4>
                                Isso mesmo colegas, edição mídia não é a cereja do bolo,
                                esse título vai pra modelagem 3D.
                            </h4>
                            <h4>
                                Esse era o meu hobby favorito, tambem foi minha primeira
                                fonte de renda, no caso eu trabalhava como freelancer.
                            </h4>
                            <h4>
                                99% do tempo os modelos 3D que eu fazia iam parar no Roblox,
                                pelo simples fato de ser o lugar mais fácil de dar um uso real pra
                                eles fora ser bonitinho e só.
                            </h4>
                        </div>
                        <div>
                         <ImgResponse src='https://pbs.twimg.com/media/ER1nMKuX0AAldO7?format=jpg&name=medium'></ImgResponse>
                        </div>
                    </FlexHSkills>
                    <FlexHSkills>
                        <div>
                            <h1>
                                Desenhar
                            </h1>
                            <h4>
                                Isso mesmo desenhos
                            </h4>
                            <h4>
                                Normalmente eu gosto mais de usar um estilo que seja cru,
                                acho que fica mais interessante e combina mais com o que eu gosto de desenhar.
                                Basicamente um freehand que depois você pega e vai polindo, tipo os
                                rabiscos que normalmente são feitos em cadernos do ensino médio
                            </h4>
                        </div>
                        <div>
                            <ImgResponse src='https://cdn.discordapp.com/attachments/305153556434911272/612823912815919114/binarybigbg.png'></ImgResponse>
                        </div>
                    </FlexHSkills>
                </FlexVer>
            </Container2>
        </>
    );
};

