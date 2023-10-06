
  import * as React from 'react';
  import { Meta, Story } from '@storybook/react';
  import { HandWaving, Sparkle, Info, Lifebuoy } from '@phosphor-icons/react';
import { Accordion, AccordionActiveColor, AccordionColor, AccordionProps, AccordionRadius, AccordionShadow, AccordionSize, AccordionTone } from '../Accordion';
import { EnhancedView, View, ViewGroup } from '../View/View';
  
  const colors: AccordionColor[] = ['white', 'gray', 'zinc', 'slate'];
  const tones: AccordionTone[] = ['solid', 'light'];
  const activeColors: AccordionActiveColor[] = [
    'white',
    'blue',
    'red',
    'green',
    'yellow',
    'purple',
    'gray',
    'dark',
    'black',
  ];
  const radiuses: AccordionRadius[] = ['none', 'sm', 'md', 'lg'];
  const sizes: AccordionSize[] = ['sm', 'md', 'lg', 'xl'];
  const shadows: AccordionShadow[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];
  
  const accordionItems = [
    {
      anchor: 'item-1',
      header: 'What is react-craftify?',
      icon: <HandWaving weight="duotone" className="w-h h-5" />,
      body: "react-craftify is a React component library that provides a set of accessible, reusable, and customizable components to help you build your next project. We've designed our components to be flexible and easy to use, so you can focus on what matters most: building great user experiences.",
    },
    {
      anchor: 'item-2',
      header: 'How do I get started?',
      icon: <Sparkle weight="duotone" className="" />,
      body: "Getting started with react-craftify is easy! Simply install the package using your package manager of choice, and you're ready to go. We've also included a set of Storybook stories to help you get familiar with our components and how to use them.",
    },
    {
      anchor: 'item-3',
      header: 'How do I contribute?',
      icon: <Lifebuoy weight="duotone" className="" />,
      body: "We're always looking for new contributors to help us improve react-craftify! If you'd like to contribute, please check out our contribution guidelines to get started. We're looking forward to working with you!",
    },
    {
      anchor: 'item-4',
      header: 'Where can I find more information?',
      icon: <Info weight="duotone" className="" />,
      body: "If you'd like to learn more about react-craftify, please visit our website. You can also follow us on Twitter to stay up to date with the latest news and updates.",
    },
  ];
  
  const meta: Meta = {
    title: 'Components/Accordion',
    component: Accordion,
    argTypes: {
      color: {
        options: colors,
        control: { type: 'select' },
      },
      activeColor: {
        options: activeColors,
        control: { type: 'select' },
      },
      size: {
        options: sizes,
        control: { type: 'select' },
      },
      shadow: {
        options: shadows,
        control: { type: 'select' },
      },
      bordered: {
        control: { type: 'boolean' },
      },
      ref: {
        table: {
          disable: true,
        },
      },
    },
    parameters: {
      controls: { expanded: true, sort: 'alpha' },
    },
  };
  
  export default meta;
  
  const DefaultTemplate: Story<AccordionProps> = (args) => {
    return (
      <EnhancedView prop="Default">
        <Accordion {...args} defaultItem={'item-1'}>
          {accordionItems.map((item) => (
            <Accordion.Item key={item.anchor} anchor={item.anchor}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </EnhancedView>
    );
  };
  
  export const Default = DefaultTemplate.bind({});
  
  const ToneTemplate: Story<AccordionProps> = (args) => {
    const items = activeColors.map((color) => (
      <React.Fragment key={color}>
        <View prop="color" value={color}>
          {tones.map((tone) => (
            <Accordion key={tone} {...args} tone={tone} activeColor={color} defaultItem={'item-1'}>
              {accordionItems.map((item) => (
                <Accordion.Item key={item.anchor} anchor={item.anchor}>
                  <Accordion.Header>{item.header}</Accordion.Header>
                  <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ))}
        </View>
      </React.Fragment>
    ));
  
    return <ViewGroup>{items}</ViewGroup>;
  };
  
  export const Tones = ToneTemplate.bind({});
  
  const ColorTemplate: Story<AccordionProps> = (args) => {
    const items = colors.map((color) => (
      <React.Fragment key={color}>
        <View prop="color" value={color}>
          <Accordion {...args} color={color} defaultItem={'item-1'}>
            {accordionItems.map((item) => (
              <Accordion.Item key={item.anchor} anchor={item.anchor}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </View>
      </React.Fragment>
    ));
  
    return <ViewGroup>{items}</ViewGroup>;
  };
  
  export const Colors = ColorTemplate.bind({});
  
  const ActiveColorTemplate: Story<AccordionProps> = (args) => {
    const items = tones.map((tone) => (
      <React.Fragment key={tone}>
        <View prop="tone" value={tone}>
          {activeColors.map((color) => (
            <Accordion key={color} {...args} tone={tone} activeColor={color} defaultItem={'item-1'}>
              {accordionItems.map((item) => (
                <Accordion.Item key={item.anchor} anchor={item.anchor}>
                  <Accordion.Header>{item.header}</Accordion.Header>
                  <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ))}
        </View>
      </React.Fragment>
    ));
  
    return <ViewGroup>{items}</ViewGroup>;
  };
  
  export const ActiveColors = ActiveColorTemplate.bind({});
  
  const RadiusTemplate: Story<AccordionProps> = (args) => {
    const items = radiuses.map((radius) => (
      <React.Fragment key={radius}>
        <View prop="radius" value={radius}>
          <Accordion {...args} radius={radius} defaultItem={'item-1'}>
            {accordionItems.map((item) => (
              <Accordion.Item key={item.anchor} anchor={item.anchor}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </View>
      </React.Fragment>
    ));
  
    return <ViewGroup>{items}</ViewGroup>;
  };
  
  export const Radiuses = RadiusTemplate.bind({});
  
  const SizeTemplate: Story<AccordionProps> = (args) => {
    const items = sizes.map((size) => (
      <React.Fragment key={size}>
        <View prop="size" value={size}>
          <Accordion {...args} size={size} defaultItem={'item-1'}>
            {accordionItems.map((item) => (
              <Accordion.Item key={item.anchor} anchor={item.anchor}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </View>
      </React.Fragment>
    ));
  
    return <ViewGroup>{items}</ViewGroup>;
  };
  
  export const Sizes = SizeTemplate.bind({});
  
  const ShadowTemplate: Story<AccordionProps> = (args) => {
    const items = shadows.map((shadow) => (
      <React.Fragment key={shadow}>
        <View prop="shadow" value={shadow}>
          <Accordion {...args} shadow={shadow} defaultItem={'item-1'}>
            {accordionItems.map((item) => (
              <Accordion.Item key={item.anchor} anchor={item.anchor}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </View>
      </React.Fragment>
    ));
  
    return <ViewGroup>{items}</ViewGroup>;
  };
  
  export const Shadows = ShadowTemplate.bind({});
  
  const BorderTemplate: Story<AccordionProps> = (args) => {
    return (
      <ViewGroup>
        <View prop="bordered" value={'true'}>
          <Accordion {...args} bordered={true} defaultItem={'item-1'}>
            {accordionItems.map((item) => (
              <Accordion.Item key={item.anchor} anchor={item.anchor}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </View>
        <View prop="bordered" value={'false'}>
          <Accordion {...args} bordered={false} defaultItem={'item-1'}>
            {accordionItems.map((item) => (
              <Accordion.Item key={item.anchor} anchor={item.anchor}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </View>
      </ViewGroup>
    );
  };
  
  export const Borders = BorderTemplate.bind({});
  
  const ExampleTemplate: Story<AccordionProps> = (args) => {
    return (
      <ViewGroup>
        <EnhancedView prop="Simple Accordion">
          <Accordion
            {...args}
            activeColor="dark"
            size="md"
            shadow="base"
            bordered={true}
            defaultItem={'item-1'}
          >
            {accordionItems.map((item) => (
              <Accordion.Item key={item.anchor} anchor={item.anchor}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body className="font-light">{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </EnhancedView>
  
        <EnhancedView prop="Borderless Accordion with Icons">
          <Accordion {...args} activeColor="blue" size="md" bordered={false} defaultItem={'item-2'}>
            {accordionItems.map((item) => (
              <Accordion.Item key={item.anchor} anchor={item.anchor}>
                <Accordion.Header>
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.header}</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="font-light">{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </EnhancedView>
  
        <EnhancedView prop="Borderless Accordion with extra padding & Icons">
          <Accordion
            {...args}
            className="px-3 py-2"
            activeColor="purple"
            size="md"
            shadow="base"
            bordered={false}
            defaultItem={'item-2'}
          >
            {accordionItems.map((item) => (
              <Accordion.Item key={item.anchor} anchor={item.anchor}>
                <Accordion.Header>
                  <div className="flex items-center space-x-2">
                    {item.icon}
                    <span>{item.header}</span>
                  </div>
                </Accordion.Header>
                <Accordion.Body className="font-light">{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </EnhancedView>
      </ViewGroup>
    );
  };
  
  export const Examples = ExampleTemplate.bind({});
  