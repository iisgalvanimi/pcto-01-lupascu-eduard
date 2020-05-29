/*export class Geometry {
    type: string;
    coordinates: any; //non sappiamo se sarà un number[] (Point), number[][] (LineString) o number [][][] (Polygon)
}

export class GeoJson {
    public type: string;
    public geometry: Geometry;
    public properties?: any
}

export class GeoFeatureCollection {
    public type: string;
    public features: GeoJson[];
}



export const GEOJSON = {
    "type": "FeatureCollection",
    "features":
        [
            {
                "type": "Feature",
                "properties": {
                    "id": 0
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                9.188604354858398,
                                45.50506864078443
                            ],
                            [
                                9.190449714660643,
                                45.50485810100996
                            ],
                            [
                                9.190943241119385,
                                45.50588071539577
                            ],
                            [
                                9.190921783447266,
                                45.50600102174928
                            ],
                            [
                                9.19154405593872,
                                45.507339412591
                            ],
                            [
                                9.189591407775879,
                                45.5077905484003
                            ],
                            [
                                9.189119338989258,
                                45.5077905484003
                            ],
                            [
                                9.1890549659729,
                                45.507534905218954
                            ],
                            [
                                9.18881893157959,
                                45.50727926087657
                            ],
                            [
                                9.188668727874756,
                                45.50696346332127
                            ],
                            [
                                9.188432693481444,
                                45.506482244592185
                            ],
                            [
                                9.188346862792969,
                                45.50609125134568
                            ],
                            [
                                9.188432693481444,
                                45.50565514028993
                            ],
                            [
                                9.188604354858398,
                                45.50506864078443
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": 1
                },
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                            [
                                9.194140434265137,
                                45.50659127107094
                            ],
                            [
                                9.193764925003052,
                                45.505831840866215
                            ],
                            [
                                9.194473028182983,
                                45.50565326049357
                            ],
                            [
                                9.194703698158264,
                                45.50614012565
                            ],
                            [
                                9.19481635093689,
                                45.50617960101868
                            ],
                            [
                                9.194902181625366,
                                45.50635817972159
                            ],
                            [
                                9.194703698158264,
                                45.50638449653516
                            ],
                            [
                                9.19453740119934,
                                45.506497282739744
                            ],
                            [
                                9.194140434265137,
                                45.50659127107094
                            ]
                        ]
                    ]
                }
            }]
}
*/
export class Geometry {
    type: string;
    coordinates: any; //  non sappiamo se sarà un number[] (Point),
                      // number[][] (LineString) o number [][][] (Polygon)

}
export class GeoJson {
        public type: string;
        public geometry: Geometry;
        public properties?: any
}

export class GeoFeatureCollection
{
    public type: string;
    public features : GeoJson[];
}

