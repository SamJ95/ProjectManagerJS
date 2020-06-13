class Api::V1::ProjectsController < ApplicationController

    def index
        @projects = Project.all
        render json: @projects
    end

    def show
        @project = Project.find(params[:id])
        @options = {
            include: [:tasks]
        }
        render json: ProjectSerializer.new(@project, @options)
    end

    def create
        @project = Project.create(check_params)
        if @project.valid?
            render json: @project
        else
            render json: {errors: @project.errors.full_messages}
        end
    end

    def destroy
        @project = Project.find(params[:id])
        @project.destroy
        render json: { status: 'SUCCESS', message: 'deleted the post', data: @project}
    end

    private
    def check_params
        params.permit(:name, :description)
    end

end


