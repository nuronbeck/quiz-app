<script>
import chartMixin from '~/mixins/chart'
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [chartMixin]
}
</script>
