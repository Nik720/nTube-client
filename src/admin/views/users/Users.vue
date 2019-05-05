<template>
    <b-row>
        <b-col cols="12" xl="12">
            <transition name="slide">
                <div>

                    <div class="mb-2 clearfix">
                        <b-link variant="link" class="btn btn-primary btn-square float-right" to="users/create">Add User</b-link>
                    </div>

                    <b-card :header="caption">
                        <b-table
                            :hover="hover"
                            :striped="striped"
                            :bordered="bordered"
                            :small="small"
                            :fixed="fixed"
                            responsive="sm"
                            :items="items"
                            :fields="fields"
                            :current-page="currentPage"
                            :per-page="perPage"
                        >
                            <template slot="id" slot-scope="data">
                                <strong>{{data.item.id}}</strong>
                            </template>
                            <template slot="name" slot-scope="data">
                                <strong>{{data.item.name}}</strong>
                            </template>
                            <template slot="status" slot-scope="data">
                                <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
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
import usersData from "./UsersData";
export default {
    name: "Users",
    props: {
        caption: {
            type: String,
            default: "Users"
        },
        hover: {
            type: Boolean,
            default: true
        },
        striped: {
            type: Boolean,
            default: true
        },
        bordered: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: true
        },
        fixed: {
            type: Boolean,
            default: false
        }
    },
    data: () => {
        return {
            items: usersData.filter(user => user.id < 42),
            fields: [
                { key: "id" },
                { key: "name" },
                { key: "registered" },
                { key: "role" },
                { key: "status" }
            ],
            currentPage: 1,
            perPage: 10,
            totalRows: 0
        };
    },
    computed: {},
    methods: {
        getBadge(status) {
            return status === "Active"
                ? "success"
                : status === "Inactive"
                ? "secondary"
                : status === "Pending"
                ? "warning"
                : status === "Banned"
                ? "danger"
                : "primary";
        },
        getRowCount(items) {
            return items.length;
        }
    }
};
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
    cursor: pointer;
}
</style>
