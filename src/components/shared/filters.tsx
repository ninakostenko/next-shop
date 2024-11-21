import React from "react";
import {FilterCheckbox, RangeSlider, Title,} from "@/components/shared";
import {Input} from "@/components/ui";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-droups";


interface Props {
    className?: string
}

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Title text="Filter" size="sm" className="mb-5 font-bold"/>
            <div className="flex flex-col gap-4"></div>
            <FilterCheckbox text="Можна збирати" value="1"/>
            <FilterCheckbox text="Новинка" value="2"/>

            {/*/!* Верхние чекбоксы *!/*/}
            {/*<CheckboxFiltersGroup*/}
            {/*    title="Тип теста"*/}
            {/*    name="pizzaTypes"*/}
            {/*    className="mb-5"*/}
            {/*    onClickCheckbox={filters.setPizzaTypes}*/}
            {/*    selected={filters.pizzaTypes}*/}
            {/*    items={[*/}
            {/*        { text: 'Тонкое', value: '1' },*/}
            {/*        { text: 'Традиционное', value: '2' },*/}
            {/*    ]}*/}
            {/*/>*/}

            {/*<CheckboxFiltersGroup*/}
            {/*    title="Размеры"*/}
            {/*    name="sizes"*/}
            {/*    className="mb-5"*/}
            {/*    onClickCheckbox={filters.setSizes}*/}
            {/*    selected={filters.sizes}*/}
            {/*    items={[*/}
            {/*        { text: '20 см', value: '20' },*/}
            {/*        { text: '30 см', value: '30' },*/}
            {/*        { text: '40 см', value: '40' },*/}
            {/*    ]}*/}
            {/*/>*/}

            {/*/!* Фильтр цен *!/*/}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Ціна від. до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1500}
                        // value={String(filters.prices.priceFrom)}
                        // onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
                    />
                    <Input
                        type="number"
                        min={10}
                        max={1500}
                        placeholder="1500"
                        // value={String(filters.prices.priceTo)}
                        // onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
                    />
                </div>
                <RangeSlider
                    min={0}
                    max={1500}
                    step={10}
                    // value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
                    // onValueChange={updatePrices}
                />
            </div>


            {/*</div>*/}

            <CheckboxFiltersGroup
                title="Ingredients"
                name="ingredients"
                className="mt-5"
                limit={5}
                defaultItems={[
                    {
                        text: 'томати',
                        value: "1"
                    },
                    {
                        text: 'ege',
                        value: "2"
                    },
                    {
                        text: 'ege',
                        value: "3"
                    },
                    {
                        text: 'tomatos',
                        value: "4"
                    },
                    {
                        text: 'ege',
                        value: "5"
                    },
                    {
                        text: 'ege',
                        value: "6"
                    },
                ]}
                items={[
                    {
                        text: 'tomatos',
                        value: "1"
                    },
                    {
                        text: 'ege',
                        value: "2"
                    },
                    {
                        text: 'ege',
                        value: "3"
                    },
                    {
                        text: 'tomatos',
                        value: "4"
                    },
                    {
                        text: 'ege',
                        value: "5"
                    },
                    {
                        text: 'ege',
                        value: "6"
                    },
                ]}
                // loading={loading}
                // onClickCheckbox={filters.setSelectedIngredients}
                // selected={filters.selectedIngredients}
            />
        </div>

    )
}