<template>
    <b-row>
        <b-col cols="12" xl="12">
            <transition name="slide">
                <div>
                    <alert
                        :alert-message="alertMessage"
                        :alert-type="alertType"
                        v-if="isAlertActive"
                    ></alert>
                    <div class="mb-2 clearfix">
                        <b-link
                            variant="link"
                            class="btn btn-primary btn-square float-right"
                            to="roles/create"
                        >Add Role</b-link>
                    </div>

                    <b-card :header="'Roles List'">
                        <b-table
                            :hover="true"
                            :striped="true"
                            :bordered="true"
                            :small="false"
                            responsive="sm"
                            :items="items"
                            :fields="fields"
                            :current-page="currentPage"
                            :per-page="perPage"
                        >
                            <template slot="id" slot-scope="data">
                                <strong>{{data.index+1}}</strong>
                            </template>
                            <template slot="name" slot-scope="data">
                                <strong>{{data.item.name}}</strong>
                            </template>
                            <template slot="created on" slot-scope="data">
                                <strong>{{data.item.createdAt|moment("dddd, MMMM Do YYYY")}}</strong>
                            </template>
                            <template slot="action" slot-scope="data" v-if="data.item.name !== 'Admin' && data.item.name !== 'Public' ">
                                <b-link
                                    class="btn btn-info btn-square mr-1 btn-sm"
                                    :to="'roles/edit/'+data.item._id"
                                >
                                    <i class="fa fa-pencil-square-o"></i>
                                </b-link>
                                <b-button
                                    size="sm"
                                    class="btn btn-danger btn-square"
                                    @click="deleteRole(data.item._id, data.index)"
                                >
                                    <i class="fa fa-trash"></i>
                                </b-button>
                            </template>
                        </b-table>
                        <nav>
                            <b-pagination
                                size="sm"
                                :total-rows="getRowCount(items)"
                                :per-page="perPage"
                                v-model="currentPage"
                                prev-text="Prev"
                                next-text="Next"
                                hide-goto-end-buttons
                            />
                        </nav>
                    </b-card>
                </div>
            </transition>
        </b-col>
    </b-row>
</template>

<script>
import Alert from "@/components/Alert.component";
export default {
    name: "Roles",
    components: {
        Alert
    },
    data: () => {
        return {
            items: [],
            fields: [
                { key: "id" },
                { key: "name" },
                { key: "created on" },
                { key: "action" }
            ],
            currentPage: 1,
            perPage: 10,
            totalRows: 0,
            alertType: "",
            alertMessage: "",
            isAlertActive: false
        };
    },
    mounted() {
        this.fetchUsersList();
    },
    methods: {
        fetchUsersList() {
            axios
            .get("api/roles")
            .then(response => {
                this.items = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        getRowCount(items) {
            return items.length;
        },
        deleteRole(id, index) {
            if (confirm("Are you sure? you want to delete role?")) {
                axios.delete("api/roles/" + id).then(response => {
                    if (response.status) {
                        this.alertType = "success"
                        this.alertMessage = "Deleted Successfully."
                        this.isAlertActive = true
                        setTimeout(() => {
                            this.alertType = ""
                            this.alertMessage = ""
                            this.isAlertActive = false
                        }, 3000);
                        this.items.splice(index, 1);
                    }
                }).catch();
            }
        }
    }
};
</script>

<style scoped>
</style>
