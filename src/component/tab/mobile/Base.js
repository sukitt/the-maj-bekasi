import { Component } from 'react'
import $ from 'jquery'
import Img1 from './dumyImg.svg'
import Gal1 from './galleryDummy/1.svg'
import Gal2 from './galleryDummy/2.svg'
import Gal3 from './galleryDummy/3.svg'


const DATA = [
    {
        id: 1,
        unit_name: "A",
        specs: {
            luas: "123.1",
            kamar_tidur: 1,
            kamar_mandi: 1,
            denah_ruang: Img1,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam. Vestibulum magna mauris, cursus ullamcorper ultrices quis, feugiat ut turpis. Sed vel blandit tortor. Fusce scelerisque ut enim et pulvinar.",
            fasilitas: [
                "1 Kamar Tidur",
                "1 Kamar Mandi",
                "Tempat Meja Makan",
                "Tempat TV, Sofa dan Meja",
                "Tempat 2 Lemari Baju",
                "Balkon",
                "Tempat Kompor Dan Wastafel"
            ],
            reviews: [
                {
                    id: 1,
                    name: "Ruang Tamu A",
                    img: Gal1,
                    desc: "Deskripsi Ruang Tamu A, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 2,
                    name: "Kamar Tidur A",
                    img: Gal2,
                    desc: "Deskripsi Kamar Tidur, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 3,
                    name: "Tempat TV A",
                    img: Gal3,
                    desc: "Deskripsi Tempat TV A, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 4,
                    name: "Other 1 A",
                    img: Gal3,
                    desc: "Deskripsi Other 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 5,
                    name: "Other 2 A",
                    img: Gal3,
                    desc: "Deskripsi Other 2 A, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                }
            ]
        }
    },
    {
        id: 2,
        unit_name: "B",
        specs: {
            luas: "123.2",
            kamar_tidur: 2,
            kamar_mandi: 2,
            denah_ruang: Img1,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam. Vestibulum magna mauris, cursus ullamcorper ultrices quis, feugiat ut turpis. Sed vel blandit tortor. Fusce scelerisque ut enim et pulvinar.",
            fasilitas: [
                "1 Kamar Tidur",
                "1 Kamar Mandi",
                "Tempat Meja Makan",
                "Tempat TV, Sofa dan Meja",
                "Tempat 2 Lemari Baju",
                "Balkon",
                "Tempat Kompor Dan Wastafel"
            ],
            reviews: [
                {
                    id: 1,
                    name: "Ruang Tamu B",
                    img: Gal1,
                    desc: "Deskripsi Ruang Tamu B, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 2,
                    name: "Kamar Tidur B",
                    img: Gal2,
                    desc: "Deskripsi Kamar Tidur B, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 3,
                    name: "Tempat TV B",
                    img: Gal3,
                    desc: "Deskripsi Tempat TV B, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 4,
                    name: "Other 1 B",
                    img: Gal3,
                    desc: "Deskripsi Other 1 B, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 5,
                    name: "Other 2 B",
                    img: Gal3,
                    desc: "Deskripsi Other 2 B, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                }
            ]

        },
    },
    {
        id: 3,
        unit_name: "C",
        specs: {
            luas: "123.3",
            kamar_tidur: 3,
            kamar_mandi: 3,
            denah_ruang: Img1,
            deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam. Vestibulum magna mauris, cursus ullamcorper ultrices quis, feugiat ut turpis. Sed vel blandit tortor. Fusce scelerisque ut enim et pulvinar.",
            fasilitas: [
                "1 Kamar Tidur",
                "1 Kamar Mandi",
                "Tempat Meja Makan",
                "Tempat TV, Sofa dan Meja",
                "Tempat 2 Lemari Baju",
                "Balkon",
                "Tempat Kompor Dan Wastafel"
            ],
            reviews: [
                {
                    id: 1,
                    name: "Ruang Tamu C",
                    img: Gal1,
                    desc: "Deskripsi Ruang Tamu, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 2,
                    name: "Kamar Tidur",
                    img: Gal2,
                    desc: "Deskripsi Kamar Tidur C, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 3,
                    name: "Tempat TV",
                    img: Gal3,
                    desc: "Deskripsi Tempat TV C, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 4,
                    name: "Other 1 C",
                    img: Gal3,
                    desc: "Deskripsi Other 1 C, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                },
                {
                    id: 5,
                    name: "Other 2 C",
                    img: Gal3,
                    desc: "Deskripsi Other 2 C, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit, sapien a luctus tempor, ante mi sodales justo, vitae tristique purus diam non diam."
                }
            ]
        },
    }

]
export class Base extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            localStore: DATA,
            mobileUnit: {...DATA[0]},
            cicilan: 0,
            kredit: 0,
            bunga: 0,
        }
    }
    
    componentDidMount() {
        $('#defaultSelect').click()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.store !== prevProps.store) {
            const store = this.props.store
            this.setState({
                localStore: store,
                mobileUnit: store[0]
            })
        }

        if (this.state.mobileUnit !== prevState.mobileUnit) {
            this.setState({mobileUnit: this.state.mobileUnit})
        }
    }

    _handleSelect = (e) => {
        let i, tabContent;
        tabContent = $('.unitContent')
        
        for (i=0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none"
        }
        $(`#${e.currentTarget.value}`).css({"display": "block"})
        
    }
}

export default Base
