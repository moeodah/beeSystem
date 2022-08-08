<template>
  <v-container
    id="regular-tables-view"
    fluid
    tag="section"
  >
    <material-card
      icon="mdi-clipboard-text"
      icon-small
      title="Employees List"
      color="accent"
    >
      <v-data-table
        :headers="headers"
        :items="employees"
        :items-per-page="10"
        class="elevation-1"
      >
        <template v-slot:item.DOB="{ item }">
          <span>{{ formatDate(item.DOB) }}</span>
        </template>
        <template v-slot:item.civilIdExpiry="{ item }">
          <span>{{ formatDate(item.civilIdExpiry) }}</span>
        </template>
        <template v-slot:item.edit="{ item }">
          <span><v-icon>mdi-pen</v-icon></span>
        </template>
      </v-data-table>
    </material-card>
  </v-container>
</template>
<script>
  import EmployeeService from '../services/EmployeeServices'
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Id',
            align: 'center',
            sortable: false,
            value: 'id',
          },
          { text: 'Name', value: 'name' },
          { text: 'Phone Number', value: 'phoneNumber' },
          { text: 'DOB', value: 'DOB' },
          { text: 'Civil Id', value: 'civilId' },
          { text: 'Civil Id Expiry', value: 'civilIdExpiry' },
          { text: 'Edit', value: 'edit' },
        ],
        employees: [],
        editedIndex: -1,
        editedItem: {
          id: '',
          name: '',
          phoneNumber1: '',
          DOB: '',
          civilId: '',
          civilIdExpiry: '',
        },
        defaultItem: {
          id: '',
          name: '',
          phoneNumber1: '',
          DOB: '',
          civilId: '',
          civilIdExpiry: '',
        },
      }
    },
    async mounted () {
      var emps = (await EmployeeService.index()).data.map(function (obj) {
        return {
          id: obj.id,
          name: obj.name,
          phoneNumber1: obj.phoneNumber1,
          DOB: obj.DOB,
          civilId: obj.civilId,
          civilIdExpiry: obj.civilIdExpiry,
        }
      })
      this.employees = emps
    },
    methods: {
      formatDate (date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      },
    },
  }
</script>
