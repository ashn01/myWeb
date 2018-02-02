import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Modal,Button} from 'react-bootstrap';

const gridStyle =
{
  width:'100%'
}

const roundStyle =
{
  width:'50px',
  border:'5px solid red'
}

const sliderStyle =
{
  width:'100%'
}

class PhotoGrid extends Component {
  constructor(props)
  {
    super();
    this.state =
    {
      showModal:false,
      index:0,
      project:
      [
        {
          title:"Packet catcher",
          purpose:"to participate in an open exhibition, I was interested in network, and I found a program called wireshark. This program can capture packets through network adapter.",
          language:"MFC, WinPcap",
          period:"July / 2014 - September / 2014",
          images:[
            {
              src:"pcp1",
              contents:"This is main screen of this program. This program reads network adapters and shows them. ",
              ext:'PNG'
            },
            {
              src:"pcp2",
              contents:"Once an adapter is clicked, it shows its arp table at the bottom and this program is now ready to read packets.",
              ext:'PNG'
            },
            {
              src:"pcp3",
              contents:"When it starts to read, it shows packets.",
              ext:'PNG'
            },
            {
              src:"pcp4",
              contents:"It can filter packets by Port or TCP/UDP or IP Address.",
              ext:'PNG'
            },
            {
              src:"pcp5",
              contents:"Contents is shown at the bottom if a packet is clicked.",
              ext:'PNG'
            },
            {
              src:"pcp6",
              contents:"This program offers to send a ping to destination.",
              ext:'PNG'
            },
            {
              src:"pcp7",
              contents:"And it shows open port number, which program is using it",
              ext:'PNG'
            }
          ]
        },
        {
          title:"Tetris",
          purpose:"After discharging military service, I learnt C/C++ and MFC by self, and developed tetris game.",
          language:"MFC",
          period:"January / 2013 - January / 2013",
          images:[
            {
              src:"tr1",
              contents:"The main screen of Tetris.",
              ext:'PNG'
            },
            {
              src:"tr2",
              contents:"When start button clicked, block falls, and next block is appeared in a box.",
              ext:'PNG'
            },
            {
              src:"tr3",
              contents:"When a space is fully filled, the space is cleared and get score.",
              ext:'PNG'
            },
            {
              src:"tr4",
              contents:"If the block gets top, this game is over.",
              ext:'PNG'
            }
          ]
        },
        {
          title:"Witch Story",
          purpose:"I was interested in developing a mobile application. I developed this with following an instruction. It is a great experience because I learnt scenes, animations, and how mobile game works.",
          language:"C#, Unity",
          period:"June / 2016 - June / 2016",
          images:[
            {
              src:"w1",
              contents:"The main screen of Witch Story.",
              ext:'png'
            },
            {
              src:"w2",
              contents:"This is playing screen. The witch flies and evades pumkins. The longer witch flies, the higher score will be gotten.",
              ext:'png'
            },
            {
              src:"w3",
              contents:"When the witch hits the pumkins, it loses it HP point at the bottom, and it shows damaged animation and particles.",
              ext:'png'
            },
            {
              src:"w4",
              contents:"If HP point runs out, it shows score panel.",
              ext:'png'
            }
          ]
        }
      ]
    }
    this.clickItem = this.clickItem.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  clickItem(index)
  {
    this.setState({index:index});
    this.showModal();
  }
  showModal()
  {
    this.setState({showModal:true});
  }
  closeModal()
  {
    this.setState({showModal:false});
  }
  modalTitle()
  {
    return this.state.project[this.state.index].title;
  }
  render() {
    return (
      <div className="w3-container" >
        <h1 className="w3-xxxlarge w3-text-red"><b>Project</b></h1>
        <hr style={roundStyle} className="w3-round"/>
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} emulateTouch={true} onClickItem={this.clickItem}>
        {
          this.state.project.map((el,i)=>{
            return (
              <div key={i}>
                <img src={require(`../resources/images/${el.images[0].src}.${el.images[0].ext}`)} width="100%" height="500px"/>
                <p className="legend"> {el.title}</p>
              </div>
            )
          })
        }

        </Carousel>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title><b>{this.state.project[this.state.index].title}</b></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4><b>Introduction</b></h4>
            <p>
              <b>Purpose</b> :&nbsp;
              {this.state.project[this.state.index].purpose}<br/>
              <b>Period</b> :&nbsp;
              {this.state.project[this.state.index].period}<br/>
              <b>Language / Library used</b> :&nbsp;
              {this.state.project[this.state.index].language}
            </p>
            <hr />

            {
              this.state.project[this.state.index].images.map((el,i)=>{
                return (
                  <div key={i}>
                    <a href={require(`../resources/images/${el.src}.${el.ext}`)}>
                      <img src={require(`../resources/images/${el.src}.${el.ext}`)} width="100%" height="auto"/>
                    </a>
                    {(el.contents)}<br/><br/>
                  </div>
                )
              })
            }

            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default PhotoGrid;
