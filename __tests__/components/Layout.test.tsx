
import renderer from 'react-test-renderer'
import Layout from "../../components/Layout"

it ('renders Layout unchanged', () => {
    const tree = renderer.create(<Layout/>).toJSON() 
    expect(tree).toMatchSnapshot()
})