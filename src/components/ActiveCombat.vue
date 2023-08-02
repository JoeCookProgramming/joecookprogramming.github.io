<template>
    <div>
    <draggable
        class="container mx-auto"
        :list="inInitiative"
        group="all"
        tag="div"
        ghost-class="ghost-card" 
        itemKey="{name + id}"
        @change="changeMethod()"
        id="inInitiative"
        :animation="200"
    >
        <template #item="{ element, index }" class="">
            <div class="flex flex-wrap items-start">

                <div class="w-2/12 mr-auto ml-auto mb-4">
                    <div class="ml-6 text-md text-center font-light leading-relaxed mt-4 mb-4">
                        <svg @click="deleteCharacter(index)" class="pointer" id="Capa_1" enable-background="new 0 0 512 512" height="32px" viewBox="0 0 512 512" width="32px" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m313.231 75.005c-1.284-18.139-16.452-32.505-34.912-32.505h-46.803c-18.46 0-33.628 14.366-34.912 32.505l-17.349 10-17.754-10c1.798-37.589 32.446-67.505 69.99-67.505h46.852c37.544 0 68.192 29.916 69.99 67.505l-17.419 10z" fill="#a29aa5"/><path d="m165.35 55h39.38c-4.62 5.49-7.59 12.42-8.13 20l-17.34 10-17.76-9.99c.33-6.98 1.66-13.7 3.85-20.01z" fill="#766d78"/><path d="m348.33 75.01-17.42 10-17.68-10.01c-.54-7.58-3.5-14.51-8.12-20h39.37c2.19 6.31 3.52 13.03 3.85 20.01z" fill="#766d78"/><path d="m349.062 504.5h-186.124c-31.469 0-57.619-24.127-59.979-55.34l-23.459-296.299 175.418-23.776 177.582 23.776-23.458 296.299c-2.36 31.213-28.51 55.34-59.98 55.34z" fill="#a29aa5"/><path d="m432.5 152.86-1.56 19.68h-349.88l-1.56-19.68 175.42-23.77z" fill="#a29aa5"/><path d="m432.5 152.86-177.58-23.77-163.193 22.113-12.556-1.629 23.79 299.586c2.36 31.21 28.51 55.34 59.98 55.34h25c-31.47 0-57.62-24.13-59.98-55.34l-20.193-255.042c-.921-11.632 8.27-21.579 19.938-21.579h303.234z" fill="#766d78"/><path d="m450.945 152.542h-389.89c-5.506 0-9.97-4.464-9.97-9.97v-.156c0-37.23 30.181-67.412 67.412-67.412h275.007c37.23 0 67.412 30.181 67.412 67.412v.156c-.001 5.507-4.465 9.97-9.971 9.97z" fill="#a29aa5"/><g fill="#766d78"><path d="m81.09 142.42v.15c0 5.51 4.46 9.97 9.96 9.97h-30c-5.5 0-9.96-4.46-9.96-9.97v-.15c0-37.23 30.18-67.41 67.41-67.41h30c-37.23 0-67.41 30.18-67.41 67.41z"/><path d="m256 450.486c-10.012 0-18.128-8.116-18.128-18.128v-207.354c0-10.012 8.116-18.128 18.128-18.128s18.128 8.116 18.128 18.128v207.354c0 10.012-8.116 18.128-18.128 18.128z"/><path d="m342.277 450.487c-.481 0-.966-.019-1.453-.058-9.98-.792-17.43-9.525-16.637-19.505l16.453-207.354c.792-9.98 9.52-17.431 19.505-16.637 9.98.792 17.43 9.525 16.637 19.505l-16.453 207.354c-.754 9.492-8.691 16.695-18.052 16.695z"/><path d="m169.723 450.487c-9.362 0-17.299-7.202-18.052-16.695l-16.453-207.354c-.792-9.98 6.657-18.713 16.637-19.505 9.978-.805 18.713 6.656 19.505 16.637l16.453 207.354c.792 9.98-6.657 18.713-16.637 19.505-.487.04-.972.058-1.453.058z"/></g></g><g><path d="m393.503 67.505h-38.351c-5.29-38.384-37.753-67.505-76.808-67.505h-4.844c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h4.844c30.79 0 56.493 22.502 61.625 52.505h-20.353c-4.538-18.697-21.485-32.505-41.298-32.505h-46.803c-19.812 0-36.759 13.808-41.297 32.505h-20.353c5.133-30.003 30.837-52.505 61.626-52.505h7.009c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-7.009c-39.056 0-71.518 29.121-76.809 67.505h-36.186c-41.307 0-74.912 33.605-74.912 74.912v.156c0 9.632 7.837 17.469 17.47 17.469h11.49l22.934 289.684c1.285 16.995 8.909 32.735 21.467 44.321 12.549 11.577 28.882 17.953 45.993 17.953h186.125c17.11 0 33.443-6.376 45.991-17.953 12.558-11.586 20.182-27.326 21.465-44.295l22.936-289.71h11.49c9.633 0 17.47-7.837 17.47-17.469v-.156c0-41.307-33.605-74.912-74.912-74.912zm-161.987-17.505h46.803c11.541 0 21.579 7.238 25.611 17.505h-98.023c4.03-10.267 14.069-17.505 25.609-17.505zm170.047 398.595c-2.052 27.143-25.114 48.405-52.5 48.405h-186.125c-27.387 0-50.448-21.262-52.503-48.432l-22.843-288.526h336.816zm51.852-306.022c0 1.361-1.107 2.469-2.47 2.469h-389.89c-1.362 0-2.47-1.107-2.47-2.469v-.156c0-33.035 26.877-59.912 59.912-59.912h275.006c33.035 0 59.912 26.877 59.912 59.912z"/><path d="m256 457.985c14.131 0 25.628-11.497 25.628-25.628v-130.755c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v130.756c0 5.86-4.768 10.628-10.628 10.628s-10.628-4.768-10.628-10.628v-207.354c0-5.86 4.768-10.628 10.628-10.628s10.628 4.768 10.628 10.628v41.598c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-41.598c0-14.131-11.497-25.628-25.628-25.628s-25.628 11.497-25.628 25.628v207.354c0 14.13 11.497 25.627 25.628 25.627z"/><path d="m340.224 457.904c13.931 1.189 26.531-9.57 27.582-23.52l4.161-52.445c.327-4.129-2.754-7.741-6.884-8.069-4.129-.322-7.742 2.755-8.069 6.884l-4.161 52.444c-.436 5.788-5.659 10.25-11.436 9.754-5.706-.334-10.324-5.75-9.755-11.436l16.453-207.353c.464-5.843 5.612-10.221 11.436-9.755 5.704.335 10.325 5.75 9.755 11.436l-9.515 119.909c-.327 4.129 2.754 7.741 6.884 8.069 4.103.318 7.741-2.754 8.069-6.883l9.515-119.909c1.373-13.71-9.766-26.769-23.521-27.575-14.074-1.128-26.457 9.432-27.576 23.521l-16.453 207.354c-1.374 13.707 9.767 26.769 23.515 27.574z"/><path d="m139.329 373.064c.328 4.128 3.948 7.218 8.069 6.883 4.13-.328 7.211-3.94 6.884-8.069l-11.588-146.033c-.464-5.841 3.912-10.971 9.764-11.436 5.678-.582 11.094 4.06 11.427 9.754l16.453 207.355c.569 5.689-4.051 11.1-9.761 11.436-5.856.457-10.972-3.984-11.43-9.755l-2.034-25.637c-.327-4.129-3.926-7.199-8.069-6.884-4.13.328-7.211 3.94-6.884 8.069l2.034 25.638c1.05 13.947 13.648 24.705 27.576 23.521 13.754-.806 24.893-13.866 23.521-27.574l-16.453-207.355c-.806-13.748-13.869-24.914-27.576-23.52-14.087 1.118-24.639 13.488-23.521 27.575z"/></g></g></svg>
                    </div>
                </div>

                <div class="w-8/12 px-2 mr-auto ml-auto">
                    <div 
                        class="w-full max-w-sm mr-auto ml-auto overflow-hidden rounded border bg-white shadow"
                        :class="element.alive ? 'bg-white' : 'bg-gray-300'"
                    >
                        <div class="p-3">
                            <div class="flex items-start justify-between">
                                <p v-if="capitalize(element.type) == 'PLAYER'" class="text-xs text-yellow-500 font-bold">
                                    {{capitalize(element.type)}}
                                </p>
                                <p v-else-if="capitalize(element.type) == 'ENEMY'" class="text-xs text-red-500 font-bold">
                                    {{capitalize(element.type)}}
                                </p>
                                <p v-else-if="capitalize(element.type) == 'NPC'" class="text-xs text-blue-500 font-bold">
                                    {{capitalize(element.type)}}
                                </p>
                                <p class="text-xs text-gray-500 font-bold">
                                    INIT
                                </p>
                            </div>
                            <div class="flex items-start justify-between">
                                <p class="text-xl text-black">
                                    {{element.name}} <span v-if="element.suffix"> {{element.suffix}}</span>
                                </p>
                                <p class="text-lg text-black relative">
                                    <span @wheel.prevent="wheelIt($event, index)" v-if="capitalize(element.type) == 'PLAYER'" class="step2 bg-yellow-500">{{element.initiative}}</span>
                                    <span @wheel.prevent="wheelIt($event, index)" v-if="capitalize(element.type) == 'ENEMY'" class="step2 bg-red-500">{{element.initiative}}</span>
                                    <span @wheel.prevent="wheelIt($event, index)" v-if="capitalize(element.type) == 'NPC'" class="step2 bg-blue-300">{{element.initiative}}</span>
                                </p>
                            </div>
                            <!-- <div class="text-xs text-gray-500">
                                {{element.currentHealth}}/{{element.maxHealth}}
                            </div> -->
                        </div>
                    </div>
                </div>

                <div class="w-2/12 px-2 mr-auto ml-auto">
                    <div v-if="capitalize(element.type) == 'ENEMY' || capitalize(element.type) == 'NPC'" class="text-md text-center font-light leading-relaxed mt-4 mb-4 relative">
                        <span 
                            class="step bg-red-800 text-white unselectable pointer"
                            @click="changeHealth(index)"
                        >
                            {{element.currentHealth}}/{{element.maxHealth}}
                        </span>
                    </div>
                    <div v-else-if="element.alive == true" class="ml-6 pt-1 text-md text-center font-light leading-relaxed mt-4 mb-4 relative">
                        <svg class="pointer positioner" @click="makeDead(index)" width="32px" height="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve"> <g> <path style="fill:#DBDBDB;" d="M495.069,94.016c-12.392,12.382-32.472,12.382-44.864,0c-0.397-0.407-0.794-0.815-1.171-1.232 L155.096,386.722L92.78,449.038c0.417,0.377,0.835,0.764,1.232,1.171c12.392,12.382,12.392,32.472,0,44.864 c-12.392,12.382-32.472,12.382-44.864,0c-6.323-6.333-9.409-14.663-9.276-22.941c-8.289,0.132-16.618-2.963-22.941-9.286 c-12.392-12.382-12.392-32.472,0-44.864c12.382-12.382,32.472-12.382,44.864,0c0.397,0.407,0.784,0.815,1.161,1.232L419.209,62.96 c-0.417-0.377-0.825-0.764-1.222-1.171c-12.392-12.382-12.392-32.472,0-44.864c12.382-12.382,32.472-12.382,44.864,0 c6.323,6.323,9.409,14.653,9.276,22.941c8.289-0.132,16.618,2.963,22.941,9.286C507.461,61.534,507.461,81.624,495.069,94.016z"/> <path style="fill:#DBDBDB;" d="M495.069,462.846c-6.323,6.323-14.653,9.419-22.941,9.286c0.132,8.278-2.953,16.608-9.276,22.941 c-12.392,12.382-32.482,12.382-44.864,0c-12.392-12.392-12.392-32.482,0-44.864c0.397-0.407,0.804-0.794,1.222-1.171 l-62.317-62.317l-8.217-8.217l-92.681-92.681l-29.824-29.824L103.716,133.545l-40.76-40.76c-0.377,0.417-0.764,0.825-1.161,1.232 c-12.392,12.382-32.482,12.382-44.864,0c-12.392-12.392-12.392-32.482,0-44.864c6.323-6.323,14.653-9.419,22.941-9.286 c-0.132-8.289,2.953-16.618,9.276-22.941c12.392-12.382,32.472-12.382,44.864,0c12.392,12.392,12.392,32.482,0,44.864 c-0.397,0.407-0.815,0.794-1.232,1.171l32.594,32.594l130.621,130.621l29.824,29.824l95.237,95.237l9.51,9.51l58.468,58.468 c0.377-0.417,0.774-0.825,1.171-1.232c12.392-12.382,32.472-12.382,44.864,0C507.461,430.374,507.461,450.464,495.069,462.846z"/> </g> <path style="fill:#C1C0BF;" d="M381.055,351.236l9.51,9.51h-1.914c-8.655,0-16.781,3.37-22.911,9.49 c-4.572,4.582-7.606,10.284-8.849,16.485l-8.217-8.217l-92.681-92.681L155.096,386.722c-2.983-14.795-16.088-25.975-31.749-25.975 h-1.924L226.17,255.999L103.716,133.545l-7.779-7.779c5.835-13.451,13.308-26.026,22.177-37.471l7.26,7.26l130.621,130.621 L393.875,88.294c8.879,11.445,16.353,24.02,22.177,37.471L285.819,255.999L381.055,351.236z"/> <path style="fill:#DBDBDB;" d="M399.791,194.864v135.335h-11.14c-17.381,0-33.113,7.046-44.508,18.44 c-11.384,11.384-18.43,27.116-18.43,44.497v35.985c0,17.565-14.235,31.8-31.8,31.8h-75.839c-17.555,0-31.79-14.235-31.79-31.8 v-35.985c0-34.753-28.185-62.938-62.938-62.938h-11.14V194.864c0-79.413,64.374-143.787,143.787-143.787 S399.791,115.451,399.791,194.864z"/> <path style="fill:#C1C0BF;" d="M159.343,296.986c1.174,14.408,8.604,27.556,20.276,36.084c16.755,12.24,39.453,39.729,39.453,98.832 c0,12.005,2.159,21.536,5.916,29.02h-6.914c-17.555,0-31.79-14.235-31.79-31.8v-35.985c0-34.76-28.178-62.938-62.938-62.938h-11.14 V194.864c0-79.413,64.374-143.787,143.787-143.787C220.668,51.077,143.638,104.209,159.343,296.986z"/> <g> <path style="fill:#423D3D;" d="M256.482,283.702h-0.484h-0.484c-14.171,0-25.66,11.488-25.66,25.66v15.493 c0,7.219,5.853,13.072,13.072,13.072c7.219,0,13.072-5.853,13.072-13.072c0,7.219,5.853,13.072,13.072,13.072 s13.072-5.853,13.072-13.072v-15.493C282.142,295.189,270.654,283.702,256.482,283.702z"/> <circle style="fill:#423D3D;" cx="327.601" cy="243.777" r="42.604"/> <circle style="fill:#423D3D;" cx="184.405" cy="243.777" r="42.604"/> </g> <path d="M62.673,103.302l35.643,35.643c1.491,1.491,3.446,2.237,5.4,2.237s3.909-0.745,5.4-2.237c2.982-2.982,2.982-7.818,0-10.8 l-40.76-40.76c-1.481-1.481-3.516-2.295-5.597-2.234c-2.094,0.054-4.073,0.965-5.474,2.52c-0.299,0.332-0.608,0.656-0.923,0.98 c-9.4,9.353-24.655,9.341-34.031-0.034c-4.551-4.552-7.056-10.602-7.056-17.036c0-6.433,2.505-12.48,7.057-17.028 c4.651-4.651,10.811-7.15,17.419-7.05c2.063,0.039,4.06-0.774,5.522-2.236c1.462-1.462,2.269-3.455,2.236-5.522 c-0.105-6.588,2.396-12.774,7.039-17.417c9.392-9.384,24.675-9.386,34.065-0.002c4.552,4.551,7.057,10.601,7.057,17.035 c0,6.433-2.506,12.48-7.055,17.025c-0.024,0.024-0.05,0.05-0.074,0.074c-0.281,0.289-0.58,0.562-0.877,0.829 c-1.554,1.402-2.464,3.382-2.518,5.474c-0.054,2.092,0.755,4.116,2.234,5.595l32.594,32.594c2.982,2.982,7.818,2.982,10.8,0 c2.982-2.982,2.982-7.818,0-10.8l-27.475-27.475c4.964-6.716,7.644-14.81,7.644-23.318c0-10.514-4.095-20.401-11.534-27.838 C84.064-3.81,59.096-3.811,43.748,11.524c-5.867,5.867-9.642,13.234-10.977,21.243c-8.002,1.337-15.369,5.114-21.239,10.983 C4.095,51.181,0,61.065,0,71.58c0,10.514,4.094,20.401,11.531,27.836C25.444,113.33,47.277,114.626,62.673,103.302z"/> <path d="M449.321,408.701l-24.609-24.609c-2.982-2.982-7.818-2.982-10.8,0c-2.982,2.982-2.982,7.817,0,10.799l29.723,29.723 c1.481,1.481,3.518,2.286,5.594,2.234c2.092-0.053,4.071-0.963,5.473-2.516c0.297-0.329,0.612-0.651,0.934-0.981 c9.395-9.352,24.653-9.339,34.033,0.032c4.551,4.551,7.057,10.601,7.057,17.035c0,6.433-2.505,12.481-7.057,17.028 c-4.652,4.651-10.847,7.153-17.418,7.05c-2.087-0.036-4.06,0.774-5.522,2.236c-1.462,1.462-2.269,3.455-2.236,5.522 c0.105,6.58-2.397,12.768-7.039,17.417c-9.396,9.388-24.678,9.39-34.065,0.002c-4.552-4.551-7.057-10.601-7.057-17.035 c0-6.433,2.506-12.48,7.055-17.026c0.023-0.024,0.048-0.048,0.071-0.073c0.282-0.289,0.572-0.563,0.869-0.831 c1.554-1.402,2.464-3.382,2.518-5.474s-0.755-4.116-2.234-5.595l-70.534-70.534c-2.982-2.982-7.818-2.982-10.799,0 c-2.982,2.982-2.982,7.817,0,10.8l65.42,65.421c-4.96,6.715-7.639,14.807-7.639,23.313c0,10.514,4.095,20.401,11.532,27.836 c7.669,7.67,17.746,11.506,27.826,11.505c10.08,0,20.163-3.837,27.842-11.509c5.864-5.873,9.637-13.237,10.972-21.238 c8.003-1.337,15.369-5.114,21.24-10.983c7.437-7.431,11.533-17.315,11.533-27.831c0-10.514-4.094-20.4-11.533-27.838 C486.549,398.672,464.713,397.379,449.321,408.701z"/> <path d="M386.456,345.835c-2.981-2.982-7.817-2.982-10.8,0c-2.982,2.982-2.982,7.817,0,10.8l21.204,21.204 c1.491,1.492,3.446,2.237,5.4,2.237c1.954,0,3.909-0.745,5.4-2.237c2.982-2.982,2.982-7.817,0-10.8L386.456,345.835z"/> <path d="M392.025,100.944l32.584-32.584c1.481-1.481,2.288-3.503,2.234-5.595c-0.054-2.092-0.964-4.072-2.518-5.474 c-0.296-0.267-0.585-0.541-0.867-0.829c-0.024-0.024-0.049-0.05-0.074-0.074c-4.55-4.545-7.055-10.592-7.055-17.025 c0-6.434,2.506-12.485,7.057-17.035c9.388-9.388,24.67-9.387,34.063,0c4.645,4.645,7.146,10.831,7.041,17.419 c-0.033,2.067,0.774,4.06,2.236,5.522c1.462,1.462,3.459,2.274,5.522,2.236c6.593-0.106,12.768,2.399,17.421,7.053 c4.549,4.545,7.055,10.593,7.055,17.026c0,6.435-2.506,12.485-7.055,17.034c-9.393,9.385-24.676,9.385-34.024,0.045 c-0.32-0.329-0.641-0.657-0.946-0.993c-1.402-1.554-3.381-2.463-5.473-2.516c-2.095-0.057-4.115,0.755-5.594,2.234l-40.76,40.76 c-2.982,2.982-2.982,7.817,0,10.8c1.491,1.492,3.446,2.237,5.4,2.237c1.954,0,3.909-0.745,5.4-2.237l35.647-35.647 c15.391,11.322,37.227,10.029,51.148-3.882c7.436-7.435,11.531-17.321,11.531-27.836c0-10.515-4.095-20.4-11.531-27.828 c-5.871-5.871-13.237-9.649-21.241-10.986c-1.335-8.009-5.111-15.376-10.979-21.245c-15.352-15.339-40.322-15.338-55.661,0.002 c-7.436,7.435-11.532,17.321-11.532,27.836c0,8.505,2.679,16.597,7.64,23.313l-27.471,27.471c-2.982,2.982-2.982,7.817,0,10.8 C384.208,103.926,389.044,103.926,392.025,100.944z"/> <path d="M157.924,373.094L87.38,443.638c-1.481,1.481-2.288,3.503-2.234,5.595c0.054,2.092,0.964,4.072,2.518,5.474 c0.297,0.268,0.596,0.541,0.879,0.831c0.023,0.024,0.048,0.049,0.071,0.073c4.55,4.546,7.055,10.593,7.055,17.026 c0,6.434-2.506,12.485-7.055,17.033c-9.392,9.385-24.674,9.385-34.061,0.006c-4.647-4.655-7.149-10.842-7.044-17.423 c0.033-2.068-0.774-4.06-2.236-5.522c-1.462-1.462-3.47-2.271-5.522-2.236c-6.593,0.1-12.767-2.399-17.42-7.052 c-4.552-4.546-7.056-10.592-7.056-17.026s2.506-12.485,7.057-17.035c9.376-9.375,24.629-9.386,34.03-0.034 c0.315,0.324,0.623,0.648,0.923,0.98c1.402,1.555,3.382,2.466,5.474,2.52c2.09,0.058,4.116-0.753,5.597-2.234l67.978-67.978 c2.982-2.982,2.982-7.817,0-10.799c-2.982-2.982-7.818-2.982-10.8,0l-62.86,62.859c-15.394-11.321-37.229-10.027-51.142,3.886 C4.094,420.017,0,429.903,0,440.417c0,10.515,4.095,20.4,11.531,27.829c5.872,5.872,13.237,9.65,21.242,10.986 c1.336,8,5.11,15.366,10.978,21.244c7.672,7.666,17.75,11.5,27.829,11.499c10.079,0,20.159-3.834,27.833-11.501 c7.436-7.435,11.532-17.321,11.532-27.836c0-8.507-2.681-16.602-7.644-23.319l65.424-65.424c2.982-2.982,2.982-7.817,0-10.8 C165.742,370.111,160.906,370.112,157.924,373.094z"/> <path d="M255.515,276.065c-18.36,0-33.297,14.937-33.297,33.297v15.493c0,11.419,9.29,20.708,20.708,20.708 c4.953,0,9.504-1.747,13.071-4.658c3.567,2.911,8.12,4.658,13.072,4.658c11.419,0,20.708-9.289,20.708-20.708v-15.493 c0-18.36-14.937-33.297-33.297-33.297H255.515z M274.505,309.36v15.493c0,2.997-2.439,5.434-5.434,5.434 c-2.997,0-5.435-2.438-5.435-5.434c0-4.218-3.419-7.637-7.637-7.637c-4.218,0-7.637,3.419-7.637,7.637 c0,2.997-2.439,5.434-5.434,5.434c-2.996,0-5.434-2.438-5.434-5.434V309.36c0-9.938,8.085-18.023,18.023-18.023h0.968 C266.42,291.338,274.505,299.423,274.505,309.36z"/> <path d="M327.597,294.014c27.703,0,50.241-22.538,50.241-50.241s-22.538-50.241-50.241-50.241 c-27.703,0-50.241,22.538-50.241,50.241S299.894,294.014,327.597,294.014z M327.597,208.806c19.282,0,34.968,15.686,34.968,34.968 s-15.686,34.968-34.968,34.968c-19.282,0-34.968-15.686-34.968-34.968S308.316,208.806,327.597,208.806z"/> <path d="M184.4,193.533c-27.703,0-50.241,22.538-50.241,50.241c0,27.703,22.538,50.241,50.241,50.241s50.241-22.538,50.241-50.241 C234.642,216.071,212.103,193.533,184.4,193.533z M184.4,278.741c-19.282,0-34.968-15.686-34.968-34.968 s15.686-34.968,34.968-34.968s34.968,15.686,34.968,34.968S203.681,278.741,184.4,278.741z"/> <path d="M388.653,337.838h11.136c4.218,0,7.637-3.419,7.637-7.637V194.866c0-83.496-67.929-151.427-151.427-151.427 s-151.426,67.929-151.426,151.427v59.86c0,4.218,3.419,7.637,7.637,7.637s7.637-3.419,7.637-7.637v-59.86 c0-75.074,61.077-136.153,136.153-136.153c75.074,0,136.152,61.078,136.152,136.153v127.697h-3.499 c-36.334,0-66.335,27.603-70.155,62.938h-19.036V364.09c0-4.218-3.419-7.637-7.637-7.637c-4.218,0-7.637,3.419-7.637,7.637v21.411 h-20.553V364.09c0-4.218-3.419-7.637-7.637-7.637s-7.637,3.419-7.637,7.637v21.411h-20.552V364.09c0-4.218-3.419-7.637-7.637-7.637 s-7.637,3.419-7.637,7.637v21.411h-19.036c-3.82-35.335-33.821-62.938-70.155-62.938h-3.499v-42.379 c0-4.218-3.419-7.637-7.637-7.637c-4.218,0-7.637,3.419-7.637,7.637V330.2c0,4.218,3.419,7.637,7.637,7.637h11.136 c30.493,0,55.302,24.809,55.302,55.301v35.984c0,21.744,17.69,39.434,39.433,39.434h75.84c21.744,0,39.433-17.69,39.433-39.434 v-35.984C333.351,362.645,358.159,337.838,388.653,337.838z M318.077,429.123c0,0.416-0.01,0.83-0.032,1.241 c-0.46,9.046-5.919,16.795-13.663,20.532c-3.168,1.528-6.718,2.386-10.465,2.386h-75.84c-3.746,0-7.297-0.857-10.465-2.386 c-7.744-3.737-13.203-11.486-13.663-20.532c-0.021-0.411-0.032-0.825-0.032-1.241v-28.347h18.616v18.508 c0,4.218,3.419,7.637,7.637,7.637s7.637-3.419,7.637-7.637v-18.508h20.552v18.508c0,4.218,3.419,7.637,7.637,7.637 s7.637-3.419,7.637-7.637v-18.508h20.553v18.508c0,4.218,3.419,7.637,7.637,7.637c4.218,0,7.637-3.419,7.637-7.637v-18.508h18.616 V429.123z"/> </svg>
                    </div>
                    <div v-else-if="element.alive == false" class="ml-6 pt-1 text-md text-center font-light leading-relaxed mt-4 mb-4 relative">
                        <svg class="pointer positioner" @click="makeAlive(index)" id="Capa_1" enable-background="new 0 0 512.007 512.007" height="32px" viewBox="0 0 512.007 512.007" width="32px" xmlns="http://www.w3.org/2000/svg"><g><g id="_x32_1_favorite"><path d="m380.125 59.036c-59.77 0-109.664 42.249-121.469 98.51-.608 2.899-4.703 2.901-5.312 0-11.805-56.261-61.699-98.51-121.469-98.51-114.106 0-167.756 141.01-82.508 216.858l193.339 172.02c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z" fill="#fe646f"/><g><path d="m380.125 59.036c-6.912 0-13.689.572-20.293 1.658 99.376 15.991 141.363 144.168 61.527 215.2l-185.996 165.487 7.343 6.533c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z" fill="#fd4755"/></g></g><g><g id="_x32_1_favorite_2_"><g><path d="m380.125 59.036c-59.77 0-109.664 42.249-121.469 98.51-.608 2.899-4.703 2.901-5.312 0-11.805-56.261-61.699-98.51-121.469-98.51-114.106 0-167.756 141.01-82.508 216.858l193.339 172.02c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z" fill="#fe646f"/></g><g><g><path d="m380.125 59.036c-6.912 0-13.689.572-20.293 1.658 99.376 15.991 141.363 144.168 61.527 215.2l-185.996 165.487 7.343 6.533c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z" fill="#fd4755"/></g></g><g><path d="m237.72 453.517c-204.315-181.786-197.402-175.776-197.402-175.776-25.999-24.984-40.318-58.201-40.318-93.533 0-46.48 24.63-91.702 65.906-115.47 3.589-2.067 8.174-.833 10.242 2.757 2.067 3.589.833 8.175-2.757 10.242-36.017 20.74-58.391 60.004-58.391 102.471 0 31.212 12.683 60.588 35.711 82.717 0 0-6.881-5.996 196.979 175.386 2.292 2.039 5.242 3.161 8.309 3.161 3.066 0 6.018-1.123 8.31-3.162l61.917-55.089c3.095-2.753 7.835-2.477 10.588.618s2.477 7.835-.618 10.588l-61.917 55.09c-10.431 9.281-26.148 9.263-36.559 0zm119.643-76.458c-2.067 0-4.124-.849-5.606-2.515-2.753-3.095-2.477-7.835.618-10.588l105.273-93.665c21.815-19.409 35.132-44.369 38.513-72.181.001-.006.001-.012.002-.018 7.637-62.927-37.915-131.557-116.038-131.557-54.879 0-102.877 38.923-114.129 92.55-1.005 4.79-5.116 8.135-9.997 8.135s-8.991-3.346-9.996-8.136c-11.252-53.626-59.25-92.549-114.128-92.549-9.633 0-19.082 1.076-28.084 3.198-4.033.952-8.07-1.548-9.021-5.579-.951-4.032 1.547-8.07 5.579-9.021 10.128-2.388 20.735-3.598 31.525-3.598 55.699 0 105.463 35.109 124.125 87.792 18.71-52.817 68.567-87.792 124.125-87.792 84.905 0 139.884 74.56 130.929 148.362 0 .007-.001.015-.002.022-3.829 31.494-18.847 59.703-43.433 81.578l-105.273 93.665c-1.429 1.272-3.209 1.897-4.982 1.897z"/></g></g></g></g></svg>
                    </div>
                </div>

            </div>
            
        </template>
    </draggable>

    </div>
</template>

<script>
import draggable from 'vuedraggable'
let idGlobal = 100;
export default {
    components: {
        draggable
    },
    data() {
        return {
            drag: false            
        }
    },
    methods: {

        changeMethod() {
            if (this.$store.state.movedEvent != null && this.$store.state.movedEvent.event.to.id == "inInitiative") {
                var movedEvent = this.$store.state.movedEvent
                var newElement = {... movedEvent.event.draggedContext.element}
                if (movedEvent.from == "players") {
                    this.players.splice(movedEvent.event.draggedContext.index,0,newElement)
                } else if (movedEvent.from = "encounters") {
                    this.encounters.splice(movedEvent.event.draggedContext.index,0,newElement)
                }
                this.dupeCheck(movedEvent.event.draggedContext.element.name)
                this.$store.dispatch('setMovedEvent',null)  
            }
            this.$store.dispatch('commitToStorage')
            
        },

        dupeCheck(name) {
            var original = this.inInitiative
            var filtered = original.filter((el) => el.name === name)
            var filteredNoSuffix = original.filter((el) => el.name === name && el.suffix == null)
            var filteredSuffix = original.filter((el) => el.name === name && el.suffix != null)
            var suffix = 1
            var maxSuffix = 0

            console.log("filtered",filtered)
            console.log("filtered suffix",filteredSuffix)
            for (let i = 0, max = filteredSuffix.length; i < max; i++) {
                if (this.letterToNumber(filteredSuffix[i].suffix) > maxSuffix) {
                    maxSuffix = this.letterToNumber(filteredSuffix[i].suffix) 
                }
            }        
            if (filtered.length > 1 && filteredSuffix.length > 0) {
                console.log("top loop")
                for (let i = 0, max = this.inInitiative.length; i < max; i++) {
                    if (this.inInitiative[i].suffix == null && this.inInitiative[i].name == name) {
                        this.inInitiative[i].suffix = this.numberToLetter(maxSuffix + 1)
                    }
                }
            } else if (filtered.length > 1) {
                console.log("bottom loop")
                for (let i = 0, max = this.inInitiative.length; i < max; i++) {
                    if (this.inInitiative[i].suffix == null && this.inInitiative[i].name == name) {
                        this.inInitiative[i].suffix = this.numberToLetter(suffix)
                        suffix++
                    }
                }
            }
            console.log(suffix)
            console.log(maxSuffix)


            // var original = this.inInitiative
            // var dupes = original.filter((el) => original.filter(_el => _el.name === name).length > 1)
            // var dupesNoSuffix = original.filter((el) => original.filter(_el => _el.name === name && _el.suffix == null).length > 1)
            // console.log("dupes ",dupes)
            // console.log(dupesNoSuffix)
            // var maxSuffix = 0
            // for (let j = 0, maxj = dupes.length; j < maxj; j++) {
            //     if (dupes[j].suffix != null && this.letterToNumber(dupes[j].suffix) > maxSuffix) {
            //         maxSuffix = this.letterToNumber(dupes[j].suffix) 
            //     }
            // }
            // console.log("Max Suffix: ",maxSuffix)
            // if (dupes.length >= 2) {
            //     var suffix = 1
            //     for (let i = 0, max = this.inInitiative.length; i < max; i++) {
            //         if (this.inInitiative[i].name == name) {
            //             this.inInitiative[i].suffix = this.numberToLetter(suffix) 
            //             suffix += 1                       
            //         }
            //     }
            //     console.log("Suffix: ",suffix)
            // }
            
        },


        numberToLetter(number) {
            var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            var result = ""
            var second = number % alphabet.length
            var first = Math.floor(number/alphabet.length)
            if (first != 0) {
                result += alphabet.charAt(first - 1)
            }
            result += alphabet.charAt(second - 1)
            return result
        },

        letterToNumber(letter) {
            var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            var splitLetter = letter.split("")
            var value = 0
            for(let i = 0, max = splitLetter.length; i < max; i++) {
                value += (alphabet.indexOf(splitLetter[i]) + 1) + (26**(splitLetter.length - i - 1)) -1
            }
            return value

        },

        makeDead(index) {
            this.inInitiative[index].alive = false
            this.$store.dispatch('commitToStorage')
        },

        makeAlive(index) {
            this.inInitiative[index].alive = true
            this.$store.dispatch('commitToStorage')
        },

        deleteCharacter(index) {
            this.inInitiative.splice(index,1)
            this.$store.dispatch('commitToStorage')
        },

        changeHealth(index) {
            var damageActive = this.$store.getters.damageActive
            if(damageActive == true) {
                this.decreaseHealth(index)
            } else {
                this.increaseHealth(index)
            }
            this.$store.dispatch('commitToStorage')
        },

        decreaseHealth(index) {
            var health = this.inInitiative[index].currentHealth
            var value = this.$store.getters.scrollValue
            console.log("Health = ",health)
            console.log("Scroll Value = ",value)
            if (health > 0) {
                if (this.inInitiative[index].currentHealth - value < 0) {
                    this.inInitiative[index].currentHealth = 0
                } else {
                    this.inInitiative[index].currentHealth -= value
                }
            }
            if (this.inInitiative[index].currentHealth == 0) {
                this.inInitiative[index].alive = false
            } else {
                this.inInitiative[index].alive = true
            }
        },
        increaseHealth(index) {
            var health = this.inInitiative[index].currentHealth
            var value = -this.$store.getters.scrollValue
            console.log("Health = ",health)
            console.log("Scroll Value = ",value)
            if (health >= 0) {
                if (this.inInitiative[index].currentHealth - value > this.inInitiative[index].maxHealth) {
                    this.inInitiative[index].currentHealth = this.inInitiative[index].maxHealth
                } else {
                    this.inInitiative[index].currentHealth -= value
                }
            }   
            if (this.inInitiative[index].currentHealth == 0) {
                this.inInitiative[index].alive = false
            } else {
                this.inInitiative[index].alive = true
            }   
        },
        capitalize(value) {
            if (!value) return ''
            value = value.toString()
            return value.toUpperCase()
        },
        wheelIt (event, index) {
            const deltaY = event.deltaY;
            if (deltaY > 0) {
                if (this.inInitiative[index].initiative > -4) {
                    this.inInitiative[index].initiative -= 1
                }
            } else if (deltaY < 0) {
                if (this.inInitiative[index].initiative < 35) {
                    this.inInitiative[index].initiative += 1
                }
            }
            this.$store.dispatch('commitToStorage')
            // this.$store.dispatch('setScroll',this.scrollValue)
        }
    },
    computed: {
        inInitiative: {
            get () {
                return this.$store.state.inInitiative
            },
            set (value) {
                this.$store.dispatch('setinInitiative',value)
                this.$store.dispatch('commitToStorage')
            }
        },
        players: {
            get () {
                return this.$store.state.players
            },
            set (value) {
                this.$store.dispatch('setPlayers',value)
            }
        },
        encounters: {
            get () {
                return this.$store.state.encounters
            },
            set (value) {
                this.$store.dispatch('setEncounters',value)
                this.$store.dispatch('commitToStorage')
            }
        }
    }
}
</script>


<style scoped>

.ghost-card {
  opacity: 0.3;
  background: #F7FAFC;
}

.positioner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-90%,+10%);
}

span.step2 {
  border-radius: 3em;
  -moz-border-radius: 3em;
  -webkit-border-radius: 3em;
  display: inline-block;
  font-size: 1em;
  line-height: 1.5em;
  text-align: center;
  width: 1.5em; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-90%,+10%);

}

span.step {
  border-radius: 6em;
  -moz-border-radius: 6em;
  -webkit-border-radius: 6em;
  display: inline-block;
  font-size: 1em;
  line-height: 4em;
  text-align: center;
  width: 4em; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -15%);
  box-shadow: inset -0px -10px 10px rgba(0,0,0,0.8);

}

.unselectable {
-webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
}

.pointer {cursor: pointer;}


.scale-in-center {
	-webkit-animation: scale-in-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: scale-in-center 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0.01);
            transform: scale(0,01);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0.01);
            transform: scale(0.01);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}


</style>
