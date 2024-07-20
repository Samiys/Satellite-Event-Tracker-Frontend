<template>
  <div class="events-container">
    <h2 class="title">SATELLITE EVENTS</h2>
    <input type="text" v-model="search" class="search-input" placeholder="Search by Satellite Name">

    <div v-if="tleInfo" class="tle-info">
      <h3>TLE Information for {{ selectedEvent.satelliteName }}</h3>
      <pre class="tle-scroll">{{ tleInfo }}</pre>
    </div>

    <table class="events-table">
      <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Priority</th>
        <th>Satellite Name</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="event in filteredEvents"
          :key="event.id"
          :class="{'highlighted-row': selectedEvent && selectedEvent.id === event.id, 'cursor-default': true}"
          @click="selectEvent(event)"
      >
        <td>{{ event.date }}</td>
        <td>{{ event.description }}</td>
        <td>{{ event.priority }}</td>
        <td>{{ event.satelliteName }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EventService from '@/services/EventService';

export default {
  props: ['events'],
  data() {
    return {
      search: '',
      selectedEvent: null,
      tleInfo: null
    };
  },
  computed: {
    filteredEvents() {
      if (this.search) {
        return this.events.filter(event => event.satelliteName.toLowerCase().includes(this.search.toLowerCase()));
      }
      return this.events;
    }
  },
  methods: {
    selectEvent(event) {
      this.selectedEvent = event;
      this.fetchTleInfo(event.satelliteName);
    },
    fetchTleInfo(satelliteName) {
      EventService.getTleInfo(satelliteName)
          .then(response => {
            this.tleInfo = response.data;
          })
          .catch(error => {
            console.error("There was an error fetching the TLE information:", error);
          });
    }
  }
};
</script>

<style scoped>
.events-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  border-radius: 10px;
}

.title {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.events-table {
  width: 100%;
  border-collapse: collapse;
}

.events-table th, .events-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.events-table th {
  background-color: #f8f8f8;
  font-weight: 600;
}

.events-table tr {
  transition: background-color 0.3s ease;
}

.events-table tr:hover {
  background-color: #f1f1f1;
}

.highlighted-row {
  background-color: #d0e7ff;
}

.tle-info {
  margin-bottom: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-left: 5px solid #007bff;
  border-radius: 5px;
  max-height: 160px;
  overflow-y: auto;
}

.tle-scroll {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.cursor-default {
  cursor: default;
}
</style>
