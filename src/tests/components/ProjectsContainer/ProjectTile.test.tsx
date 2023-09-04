import { fireEvent, render, screen } from '@testing-library/react';
import ProjectTile, { ProjectItemProps } from '../../../components/ProjectsContainer/ProjectTile'

describe('ProjectTile', () => {
  const projectItem: ProjectItemProps = {
    title: 'test title',
    description: 'test description',
    image: 'an image',
    url: 'www.github.com'
  };

  const renderComponent = (props: ProjectItemProps) => {
    return render(
      <ProjectTile {...props} />
    );
  };

  beforeEach(() => {
    renderComponent({ ...projectItem }).container;
  });

  it('Renders the project tile', () => {
    const titleText = screen.queryByText(/test title/);
    expect(titleText).toBeInTheDocument();
  });

  it('Opens the project url in a new tab on click', async () => {
    const titleText = screen.queryByText(/test title/)!;
    const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
    fireEvent(
      titleText,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(windowOpenSpy).toBeCalledWith(projectItem.url, '_blank');
  });
})