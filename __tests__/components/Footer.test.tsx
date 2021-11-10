
import renderer from 'react-test-renderer'
import Footer from "../../components/Footer"

it ('renders Footer unchanged', () => {
    const tree = renderer.create(<Footer/>).toJSON() 
    expect(tree).toMatchSnapshot()
})