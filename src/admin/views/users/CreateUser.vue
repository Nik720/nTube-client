<template>
    <b-row class="justify-content-md-center">
        <b-col md="8" sm="10" xs="12" md-pull-left="2">
            <b-card>
                <div slot="header">
                    <strong>Create User</strong>
                </div>
                <b-form>
                     <b-form-group
                        label="Name"
                        label-for="Name"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-input
                            id="Name"
                            type="text"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="Email"
                        label-for="horizEmail"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-input
                            id="horizEmail"
                            type="email"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="Role"
                        label-for="role"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-select
                            id="role"
                            :plain="true"
                            :options="['Admin', 'Public']"
                        >
                        </b-form-select>
                    </b-form-group>


                    <b-form-group
                        label="Password"
                        label-for="password"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-input
                            id="password"
                            type="password"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        label="Confirm Password"
                        label-for="cpassword"
                        :label-cols="3"
                        :horizontal="true"
                    >
                        <b-form-input
                            id="cpassword"
                            type="password"
                        ></b-form-input>
                    </b-form-group>



                    <div slot="footer" class="text-center">
                        <b-button type="submit" size="sm" variant="primary" class="mr-2">
                            <i class="fa fa-dot-circle-o"></i> Submit
                        </b-button>
                        <b-button type="reset" size="sm" variant="danger">
                            <i class="fa fa-ban"></i> Reset
                        </b-button>
                    </div>
                </b-form>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "Create Users",
    data: () => {
        return {

        };
    },
    methods: {
    }
};
</script>
