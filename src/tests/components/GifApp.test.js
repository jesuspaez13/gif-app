import {shallow} from 'enzyme';
import GifApp from '../../components/GifApp';


describe('Pruebas en el componente <GifApp>',() => {
    test('debe traer 10 elementos por defecto 5 por cada categoría', async () =>{
        
        const categorias = ['nba', 'nfl'];
        const wrapper = shallow(<GifApp categorias={categorias}/>);
        expect(wrapper.find('GifContenedor').length).toBe(2);
        
    })
   
})