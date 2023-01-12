<template>
    <div class="container">
        <form action="" class="form">
            <label>Name</label>
            <input type="text">
            <label>Email</label>
            <input type="text">
            <label>Team Member</label>
            <select>
                <option v-show="teamMemberOptions.length" v-for="teamMember in teamMemberOptions" :key="teamMember.id">
                    {{ teamMember.name }}
                </option>
            </select>
            <label>Framework</label>
            <ul v-if="frameworks.length">
                <li v-for="framework in frameworks" :key="framework.id">
                    <input type="radio" :value="framework.value" :id="`radio-${framework.id}`" name="radio">
                    <label :for="`radio-${framework.id}`">{{ framework.name }}</label>
                </li>
            </ul>
            <label>Features</label>
            <ul v-if="features.length">
                <li v-for="(feature, index ) in features" :key="index">
                    <input type="checkbox" :value="feature" :id="`checkbox-${index}`">
                    <label :for="`checkbox-${index}`">{{ feature }}</label>
                </li>
                <input type="checkbox" value="all" id="checkbox-all">
                <label for="checkbox-all">Check All</label>
            </ul>
            <label>Message with Counter</label>
            <span class="counter">100/255</span>
            <textarea name="" id="" cols="6" maxlength="255">
                Dear Mr. President,
            </textarea>
        </form>
        <div class="form-info">

        </div>

    </div>
</template>

<script>
    export default {
        name: 'ContactForm',
        data() {
            return {
                teamMemberOptions: [
                    {id: 0, name: "Sarah Drasner"},
                    {id: 1, name: "Even You"},
                ],
                frameworks: [
                    {id: 0, value: "angular", name: "AngularJS"},
                    {id: 1, value: "react", name: "ReactJS"},
                    {id: 2, value: "vue", name: "VueJS"},
                ],
                features: [
                    "Reactivity", "Encapsulation", "Data Binding"
                ]
            }
        },
        methods: {
            name() {
                
            }
        },

    }
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    background: linear-gradient(to bottom right, #56D8E4 0%, #9F01EA 100%);
    width: auto;
    height: 1050px;
}

.form {
    width: 500px;
    height: 900px;
    background: #fff;
}

.form-info {
    width: 500px;
    height: 900px;
    background: #1C0C2F;
}




</style>