import { Controller} from "stimulus"

export default class extends Controller {
  static targets = ["button"]

  connect() {
    console.log('hello stimulus')
  }

  reset() {
    console.log(this.element)
    this.element.reset()
    this.buttonTarget.disabled = false
  }
}
