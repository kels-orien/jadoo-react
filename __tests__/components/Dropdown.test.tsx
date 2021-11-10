
import renderer from 'react-test-renderer'
import Dropdown from "../../components/Dropdown"

it ('renders Dropdown unchanged', () => {
    const tree = renderer.create(<Dropdown/>).toJSON() 
    expect(tree).toMatchSnapshot()
})