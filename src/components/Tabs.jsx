import React, { useState } from 'react';

const Tabs = () => {

    const [tabs, setTabs] = useState(
        [
            {
                titulo:"Pestaña 1", 
                estado:'active',
                contenido: 'Hola:)'
            }, 
            {
                titulo: "Pestaña 2",
                estado: '', 
                contenido: 'Que tal?'
            }, 
            {
                titulo: "Pestaña 3", 
                estado: '', 
                contenido: 'Soy una pestaña:)'
            },
        ]
    );

    const changeActive = (i) => {
        let newTabs = tabs.map((tab, index) => {
            index === i ? tab.estado='active' : tab.estado ='';
            return tab;
        })
        setTabs(newTabs);
    }

    return (
        <div className='container'>
            <div className='tabs'>
            {
                tabs.map((tab,i) => {
                    return (<button key={i} className={tab.estado} onClick={()=>changeActive(i)}>{ tab.titulo }</button>)
                } )
            }
            </div>
                <div className='content'>
                    {
                        tabs.filter(tab => tab.estado === 'active').map((tab,i)=><p key={i}>{ tab.contenido }</p>)
                    }
            </div>
            
        </div>
    );
}

export default Tabs;